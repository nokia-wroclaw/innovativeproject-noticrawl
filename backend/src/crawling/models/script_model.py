from pydantic import BaseModel
from typing import List

from .notification_model import Notification

class ScriptCreate(BaseModel):
    script_name: str
    instructions: str
    link_id: int

class Script(ScriptCreate):
    script_id: int
    notifications: List[Notification] = []

    class Config:
        orm_mode = True
