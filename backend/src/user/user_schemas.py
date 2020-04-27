from pydantic import BaseModel
from typing import List

from src.crawling.schemas.link_schemas import Link

class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    user_id: int
    links: List[Link] = []

    class Config:
        orm_mode = True
    