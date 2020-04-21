from pydantic import BaseModel
from typing import List

from .script_schemas import Script

class LinkCreate(BaseModel):
    url: str
    description: str = None
    user_id: int

class Link(LinkCreate):
    links_id: int
    scripts: List[Script] = []

    class Config:
        orm_mode = True
    