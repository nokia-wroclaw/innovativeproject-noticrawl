from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

#FastAPI instance
app = FastAPI()

class Item(BaseModel):
    name: str = None
    description: str = None

app.mount("/static", StaticFiles(directory="../../build/static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/api/v1")
def show_statics(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/")
def hello_world():
    return {"message": "Hello World"}
