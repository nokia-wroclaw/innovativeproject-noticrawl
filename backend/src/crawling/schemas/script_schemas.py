from pydantic import BaseModel
from typing import List

from .notification_schemas import Notification

class ScriptCreate(BaseModel):
    instructions: str
    link_id: int

class Script(ScriptCreate):
    script_id: int
    notifications: List[Notification] = []

    class Config:
        orm_mode = True
    