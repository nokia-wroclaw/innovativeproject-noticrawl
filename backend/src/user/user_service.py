from datetime import datetime, timedelta

from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
import jwt

from . import user_model
from src.database.database_schemas import Users

PWD_CONTEXT = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"

ALGORITHM = "HS256"

REFRESH_TOKEN_LIFETIME = 604800
ACCESS_TOKEN_LIFETIME = 604800

def get_user(db: Session, user_id: int):
    return db.query(Users).filter(Users.user_id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(Users).filter(Users.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Users).offset(skip).limit(limit).all()

def create_user(db: Session, user: user_model.UserCreate):
    hashed_password = hash_password(user.password)
    db_user = Users(email=user.email, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    print(db_user.email)
    return db_user

def hash_password(password: str):
    return PWD_CONTEXT.hash(password)   

def verify_password(plain_password, hashed_password) -> bool:
    return PWD_CONTEXT.verify(plain_password, hashed_password) 

def authenticate_user(db: Session, email: str, password: str) -> None:
    user = get_user_by_email(db, email)
    if user is None or not verify_password(password, user.password):
        raise HTTPException(status_code=400, detail="Incorrect username or password")

def create_token(*, data: dict, lifetime: int) -> jwt:
    data.update({"exp": datetime.utcnow() + timedelta(minutes=lifetime)})
    return jwt.encode(payload=data, key=SECRET_KEY, algorithm=ALGORITHM)
# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

# def get_user(db, username: str):
#     if username in db:
#         user_dict = db[username]
#         return UserInDB(**user_dict)


# def fake_decode_token(token):
#     # This doesn't provide any security at all
#     # Check the next version
#     user = get_user(fake_users_db, token)
#     return user


# async def get_current_user(token: str = Depends(oauth2_scheme)):
#     user = fake_decode_token(token)
#     if not user:
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Invalid authentication credentials",
#             headers={"WWW-Authenticate": "Bearer"},
#         )
#     return user


# async def get_current_active_user(current_user: User = Depends(get_current_user)):
#     if current_user.disabled:
#         raise HTTPException(status_code=400, detail="Inactive user")
#     return current_user
