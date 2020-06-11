import asyncio

from fastapi import APIRouter, Depends, HTTPException, Response
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from src.helpers.database import get_db
from src.helpers.oauth2_scheme import oauth2_scheme
from src.helpers.status_code_model import StatusCodeBase
from src.user import user_service
from src.user.user_model import UserCreate

from . import auth_service

auth_router = APIRouter()

asyncio.create_task(
    auth_service.remove_expired_tokens(sec_frequency=5, db=next(get_db()))
)


@auth_router.post(
    "/api/v1/register",
    tags=["Auth"],
    responses={
        400: {"model": StatusCodeBase, "description": "Passwords are not the same"},
        409: {"model": StatusCodeBase, "description": "Email in use"},
    },
)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    if user.password != user.re_password:
        raise HTTPException(status_code=400, detail="Passwords are not the same.")

    db_user = user_service.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(
            status_code=409, detail="User with this email already exists."
        )

    user_service.create_user(db, user)
    return auth_service.generate_cookies(user.email)


@auth_router.post(
    "/api/v1/login",
    tags=["Auth"],
    responses={
        400: {"model": StatusCodeBase, "description": "Incorrect username or password"}
    },
)
def login(
        form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)
    ):
    user_service.authenticate_user(db, form_data.username, form_data.password)

    return auth_service.generate_cookies(form_data.username)


@auth_router.post(
    "/api/v1/logout",
    tags=["Auth"],
)
def logout(token: str = Depends(oauth2_scheme), db=Depends(get_db)):
    auth_service.save_revoked_token(token, db)

    response = Response()
    response.delete_cookie("access_token")
    return response
