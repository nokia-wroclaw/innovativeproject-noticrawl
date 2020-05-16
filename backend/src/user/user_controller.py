from typing import List

from fastapi import APIRouter, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from starlette.responses import Response

from src.helpers.database import get_db

from . import user_service
from .user_model import User, UserCreate

user_router = APIRouter()


@user_router.post("/api/v1/user/", response_model=User)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = user_service.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return user_service.create_user(db=db, user=user)


@user_router.get("/api/v1/user/", response_model=List[User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = user_service.get_users(db, skip=skip, limit=limit)
    return users


@user_router.get("/api/v1/user/{user_id}", response_model=User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = user_service.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@user_router.post("/api/v1/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user_service.authenticate_user(db, form_data.username, form_data.password)

    response = Response(status_code=200)

    response.set_cookie(
        key="refresh_token",
        value=jsonable_encoder(
            user_service.create_token(
                data={"sub": form_data.username}, lifetime=user_service.REFRESH_TOKEN_LIFETIME
            )
        ),
        httponly=True,
        expires=user_service.REFRESH_TOKEN_LIFETIME
    )
    response.set_cookie(
        key="access_token",
        value=jsonable_encoder(
            user_service.create_token(
                data={"sub": form_data.username}, lifetime=user_service.ACCESS_TOKEN_LIFETIME
            )
        ),
        httponly=True,
        expires=user_service.ACCESS_TOKEN_LIFETIME,
    )
    response.set_cookie(
        key="username",
        value=form_data.username.encode("latin-1", errors="ignore"),
        expires=user_service.REFRESH_TOKEN_LIFETIME,
    )
    return response

#####
# @auth_router.get("/get-access-token")
# async def get_acces_token(request: Request) -> Response:
#     try:
#         username = verify_cookies(request.cookies, "refresh_token")
#     except CookieVerificationError:
#         raise HTTPException(status_code=HTTP_400_BAD_REQUEST)
#     response = Response()
#     response.set_cookie(
#         key="access_token",
#         value=jsonable_encoder(
#             create_token(data={"sub": username}, lifetime=ACCESS_TOKEN_LIFETIME)
#         ),
#         httponly=True,
#         expires=ACCESS_TOKEN_LIFETIME,
#     )
#     return response
