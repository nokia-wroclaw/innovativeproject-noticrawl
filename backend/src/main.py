from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .database import models
from .user.user_controller import user_router

# change class name:

app = FastAPI()
app.include_router(user_router)

models.create_models()
app = FastAPI()

app.mount("/static", StaticFiles(directory="../frontend/build/static"), name="static")
templates = Jinja2Templates(directory="../frontend/build")


@app.get("/")
def show_statics(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/hello")
def hello_world():
    return {"message": "Hello World"}
