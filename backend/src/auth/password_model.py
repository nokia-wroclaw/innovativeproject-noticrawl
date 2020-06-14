from pydantic import BaseModel

class Password(BaseModel):
    current_password: str

class PasswordChange(Password):
    new_password: str
    