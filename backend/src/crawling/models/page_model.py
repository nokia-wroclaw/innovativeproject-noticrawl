from pydantic import BaseModel


class Page(BaseModel):
    url: str
    html: str
