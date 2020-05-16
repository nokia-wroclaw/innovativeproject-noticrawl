from pydantic import BaseModel
from typing import List

from .script_model import Script

class LinkCreate(BaseModel):
    url: str
    description: str = None
    user_id: int

class Link(LinkCreate):
    link_id: int
    scripts: List[Script] = []

    class Config:
        orm_mode = True
    