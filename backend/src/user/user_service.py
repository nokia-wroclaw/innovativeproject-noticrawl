import logging

from fastapi import HTTPException
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from src.database.database_schemas import Users

from .user_model import User, UserCreate

logger = logging.getLogger("Noticrawl")

PWD_CONTEXT = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_user(db: Session, user_id: int):
    return db.query(Users).filter(Users.user_id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(Users).filter(Users.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Users).offset(skip).limit(limit).all()


def create_user(db: Session, user: UserCreate):
    hashed_password = hash_password(user.password)
    db_user = Users(email=user.email, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def hash_password(password: str):
    return PWD_CONTEXT.hash(password)


def verify_password(plain_password, hashed_password) -> bool:
    return PWD_CONTEXT.verify(plain_password, hashed_password)


def authenticate_user(db: Session, email: str, password: str) -> None:
    user = get_user_by_email(db, email)
    if user is None or not verify_password(password, user.password):
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    return User.from_orm(user)
