from pydantic import BaseModel, validator

# from src.helpers.validation.validation import validate_url


class CrawlData(BaseModel):
    url: str
    xpath: str
    period: int
    email: str

    # @validator("url")
    # def if_url(cls, url):
    #     validate_url(url)
