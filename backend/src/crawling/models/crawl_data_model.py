from pydantic import BaseModel, validator

# from src.helpers.validation.validation import validate_url


class CrawlDataBase(BaseModel):
    name: str
    url: str
    period: int = 10  # seconds
    email: str


class CrawlDataInput(CrawlDataBase):
    xpath: str


class CrawlDataInDb(CrawlDataBase):
    xpath: str
    element_value: str

    class Config:
        orm_mode = True


class CrawlDataPublic(CrawlDataBase):
    element_value: str

    class Config:
        orm_mode = True

    # @validator("url")
    # def if_url(cls, url):
    #     validate_url(url)
