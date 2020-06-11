from pydantic import BaseModel, validator

# from src.helpers.validation.validation import validate_url


class CrawlDataBase(BaseModel):
    name: str = None
    url: str = None
    period: int = None
    email: str = None


class CrawlDataCreate(CrawlDataBase):
    xpath: str = None

    class Config:
        orm_mode = True

class CrawlData(CrawlDataBase):
    crawl_id: int
    xpath: str
    element_value: str

    class Config:
        orm_mode = True


    # @validator("url")
    # def if_url(cls, url):
    #     validate_url(url)
