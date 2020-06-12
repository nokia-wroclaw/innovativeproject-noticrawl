import asyncio
import calendar
import logging
from datetime import datetime, timedelta, timezone

import jwt
from dynaconf import settings
from fastapi import Depends, HTTPException, Response
from fastapi.encoders import jsonable_encoder
from jwt.exceptions import ExpiredSignatureError
from sqlalchemy.orm import Session

from src.database.database_schemas import RevokedTokens
from src.helpers.database import get_db
from src.helpers.oauth2_scheme import oauth2_scheme
from src.user.user_service import get_user_by_email

logger = logging.getLogger("Noticrawl")

SECRET_KEY = settings.SECRET_KEY
JWT_ALGORITHM = settings.ALGORITHM

ACCESS_TOKEN_LIFETIME = settings.as_int("ACCESS_TOKEN_LIFETIME")


def create_token(*, data: dict, lifetime: int) -> jwt:
    data.update(
        {
            "exp": datetime_to_int(
                datetime.now(timezone.utc) + timedelta(seconds=lifetime)
            )
        }
    )
    return jwt.encode(payload=data, key=SECRET_KEY, algorithm=JWT_ALGORITHM)


def generate_cookies(username) -> Response:
    response = Response(status_code=200)

    response.set_cookie(
        key="access_token",
        value="Bearer "
        + jsonable_encoder(
            create_token(data={"sub": username}, lifetime=ACCESS_TOKEN_LIFETIME)
        ),
        httponly=True,
        expires=ACCESS_TOKEN_LIFETIME,
    )

    return response


def is_token_not_revoked(token, db: Session):
    _, _, signature = token.split(".")
    token = db.query(RevokedTokens).filter(RevokedTokens.signature == signature).first()
    if token is not None:
        raise RevokedTokenError()


def verify_token(token=Depends(oauth2_scheme), db: Session = Depends(get_db)) -> str:
    try:
        is_token_not_revoked(token, db)
        payload = jwt.decode(token, SECRET_KEY, algorithms=[JWT_ALGORITHM])
        email = payload.get("sub")
        if get_user_by_email(db, email) is None:
            raise HTTPException(
                status_code=401, detail=f"Owner of token doesn't exist"
            )
        return email
    except ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except RevokedTokenError:
        raise HTTPException(status_code=401, detail="Token revoked")


# def verify_cookie(cookies: Dict, name, db: Session) -> str:
#     return verify_token(cookies[name], db)


def save_revoked_token(token: str, db: Session):
    _, _, signature = token.split(".")
    expiry_date = jwt.decode(token, SECRET_KEY, algorithms=[JWT_ALGORITHM]).get("exp")

    db_token = RevokedTokens(signature=signature, expiry_date=expiry_date)
    db.add(db_token)
    db.commit()


async def remove_expired_tokens(sec_frequency: int, db: Session):
    while True:
        db.query(RevokedTokens).filter(
            RevokedTokens.expiry_date <= datetime_to_int(datetime.now(timezone.utc))
        ).delete()
        db.commit()

        await asyncio.sleep(sec_frequency)


def datetime_to_int(datetime_val: datetime):
    return calendar.timegm(datetime_val.utctimetuple())


class RevokedTokenError(Exception):
    """Raised when token is revoked"""
    pass
