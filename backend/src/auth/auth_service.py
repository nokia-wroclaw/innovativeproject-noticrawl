from datetime import datetime, timedelta
from typing import Dict

import jwt
from dynaconf import settings
from fastapi import HTTPException, Request, Response
from fastapi.encoders import jsonable_encoder
from jwt.exceptions import ExpiredSignatureError
from sqlalchemy.orm import Session

from src.user.user_service import get_user_by_email

SECRET_KEY = settings.SECRET_KEY
JWT_ALGORITHM = settings.ALGORITHM

REFRESH_TOKEN_LIFETIME = settings.as_int("REFRESH_TOKEN_LIFETIME")
ACCESS_TOKEN_LIFETIME = settings.as_int("ACCESS_TOKEN_LIFETIME")

def create_token(*, data: dict, lifetime: int) -> jwt:
    data.update({"exp": datetime.utcnow() + timedelta(minutes=lifetime)})
    return jwt.encode(payload=data, key=SECRET_KEY, algorithm=JWT_ALGORITHM)


def verify_token(token, db: Session) -> str:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[JWT_ALGORITHM])
        email = payload.get("sub")
        if get_user_by_email(db, email) is None:
            raise HTTPException(status_code=401, detail="User with email" + email + "doesn't exist")
        return email
    except ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")


def verify_cookie(cookies: Dict, name, db: Session) -> str:
    return verify_token(cookies[name], db)


def generate_cookies(username) -> Response:
    response = Response(status_code=200)

    response.set_cookie(
        key="access_token",
        value="Bearer " + jsonable_encoder(
            create_token(
                data={"sub": username}, lifetime=ACCESS_TOKEN_LIFETIME
            )
        ),
        httponly=True,
        expires=ACCESS_TOKEN_LIFETIME,
    )

    response.set_cookie(
        key="refresh_token",
        value=jsonable_encoder(
            create_token(
                data={"sub": username}, lifetime=REFRESH_TOKEN_LIFETIME
            )
        ),
        httponly=True,
        expires=REFRESH_TOKEN_LIFETIME,
    )

    return response

# @auth_router.get("/get-access-token")
# async def get_acces_token(
#         request: Request,
#         db: Session = Depends(get_db)
#     ) -> Response:
#     email = auth_service.verify_cookie(request.cookies, "refresh_token", db)
#     response = Response()
#     response.set_cookie(
#         key="access_token",
#         value=jsonable_encoder(
#             auth_service.create_token(
#                 data={"sub": email}, lifetime=ACCESS_TOKEN_LIFETIME
#             )
#         ),
#         httponly=True,
#         expires=ACCESS_TOKEN_LIFETIME,
#     )
#     return response
