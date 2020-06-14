from pydantic import BaseModel


class StatusCodeBase(BaseModel):
    detail: str
