from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.requests import Request
import requests as req
#from backend.src import parse_module

def parse(url):
    request = req.get(url)
    parse_page = request.text.replace("<!DOCTYPE html>", "")
    return parse_page

class Selector(BaseModel):
    xpath: str

class Link(BaseModel):
    url: str


app = FastAPI()

app.mount("/static", StaticFiles(directory="../../frontend/build/static"), name="static")
templates = Jinja2Templates(directory="../../frontend/build")


@app.get("/")
def show_statics(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/new-crawl")
async def post_static():
    return {"parsedPage": "static_parse"}


@app.post("/api/v1/start-crawling")
async def post_xpath(selector):
    return None


#parsing route:
@app.post("/api/v2/new-crawl")
async def post_link(link):
    parsed_page = parse(link)
    return {"parsedPage": parsed_page}
