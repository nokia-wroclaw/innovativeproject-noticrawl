from pydantic import BaseModel, validator

# from src.helpers.validation.validation import validate_url


class CrawlData(BaseModel):
    url: str
    xpath: str
    period: int = 10 #seconds
    email: str
    element_value: str = "1"

    # @validator("url")
    # def if_url(cls, url):
    #     validate_url(url)
