from sqlalchemy.orm import Session

from . import user_schemas
from src.database.models import Users

def get_user(db: Session, user_id: int):
    return db.query(Users).filter(Users.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(Users).filter(Users.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Users).offset(skip).limit(limit).all()

def create_user(db: Session, user: user_schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = Users(email=user.email, password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    print(db_user.email)
    return db_user
