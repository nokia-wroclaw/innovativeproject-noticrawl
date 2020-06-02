from dynaconf import settings
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from src.helpers.database import get_db
from src.user import user_service
from src.user.user_model import UserCreate

from . import auth_service

REFRESH_TOKEN_LIFETIME = settings.as_int("REFRESH_TOKEN_LIFETIME")
ACCESS_TOKEN_LIFETIME = settings.as_int("ACCESS_TOKEN_LIFETIME")

auth_router = APIRouter()


@auth_router.post("/api/v1/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    if user.password != user.re_password:
        raise HTTPException(status_code=400, detail="Passwords are not the same.")
    db_user = user_service.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="User with this email already exists.")
    user_service.create_user(db, user)
    return auth_service.generate_cookies(user.email)

@auth_router.post("/api/v1/login")
async def login(
        form_data: OAuth2PasswordRequestForm = Depends(),
        db: Session = Depends(get_db)
    ):
    user_service.authenticate_user(db, form_data.username, form_data.password)

    return auth_service.generate_cookies(form_data.username)

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
