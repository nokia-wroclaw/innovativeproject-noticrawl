from pydantic import BaseModel, validator

# from src.helpers.validation.validation import validate_url


class CrawlData(BaseModel):
    name: str
    url: str
    xpath: str
    period: int = 10  # seconds
    email: str
    value: str

    # @validator("url")
    # def if_url(cls, url):
    #     validate_url(url)
