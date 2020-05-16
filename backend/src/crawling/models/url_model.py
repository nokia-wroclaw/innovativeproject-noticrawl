from pydantic import BaseModel, validator

# from src.helpers.validation.validation import validate_url

class Url(BaseModel):
    url: str

    # @validator("url")
    # def url_is_valid(cls, v):
    #     return validate_url(v)
