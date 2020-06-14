import logging

from sqlalchemy.orm import Session

from src.database.database_schemas import Users


logger = logging.getLogger("Noticrawl")


def get_user(db: Session, user_id: int):
    return db.query(Users).filter(Users.user_id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(Users).filter(Users.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Users).offset(skip).limit(limit).all()
