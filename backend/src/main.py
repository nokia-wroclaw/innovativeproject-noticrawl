from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


templates = Jinja2Templates(directory="/frontend/build/")
#FastAPI instance
app = FastAPI()

class Item(BaseModel):
    name: str = None
    description: str = None

app.mount("/static", StaticFiles(directory="/frontend/build/static"), name="static")


@app.get("/")
def show_statics(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/hello")
def hello_world():
    return {"message": "Hello World"}
