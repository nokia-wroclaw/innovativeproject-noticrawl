from pydantic import BaseModel

from ..communicators import Communicators

class NotificationCreate:
    address: str
    communicator: Communicators
    script_id: int

class Notification(NotificationCreate):
    notification_id: int

    class Config:
        orm_mode = True
