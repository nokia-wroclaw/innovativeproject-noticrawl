from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .database import models
from .database.connection import SessionLocal
from .user.user_controller import user_router

#FastAPI instance
app = FastAPI()
app.include_router(user_router)

models.create_models()

class Item(BaseModel):
    name: str = None
    description: str = None

app.mount("/static", StaticFiles(directory="/frontend/build/static"), name="static")
templates = Jinja2Templates(directory="/frontend/build")

@app.get("/api/v1/")
def show_statics(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/")
def hello_world():
    return {"message": "Hello World"}
