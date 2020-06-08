import logging
from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from src.auth.auth_service import verify_token
from src.helpers.database import get_db
from src.helpers.status_code_model import StatusCodeBase

from . import user_service
from .user_model import User

user_router = APIRouter()
logger = logging.getLogger("Noticrawl")


@user_router.get(
    "/api/v1/user",
    dependencies=[Depends(verify_token)],
    response_model=List[User],
    tags=["User"],
    responses={
        401: {"model": StatusCodeBase, "description": "Not logged in"},
    }
)
def read_users(
        skip: int = 0,
        limit: int = 100,
        db: Session = Depends(get_db)
    ):
    users = user_service.get_users(db, skip, limit)
    return users


@user_router.get(
    "/api/v1/user/me",
    response_model=User,
    tags=["User"],
    responses={
        401: {"model": StatusCodeBase, "description": "Not logged in"},
        404: {"model": StatusCodeBase, "description": "User not found"},
    }
)
def read_user(
        user_email: dict = Depends(verify_token),
        db: Session = Depends(get_db)
    ):
    db_user = user_service.get_user_by_email(db, user_email)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user
