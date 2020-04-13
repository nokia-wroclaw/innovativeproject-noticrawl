from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import requests


class PageToParse(BaseModel):
    parsed_page = str

class Selector(BaseModel):
    name: str = "xpath_selector"
    xpath: str

def parsing(url):
    r = requests.get(url)
    parse_page = r.text.replace("<!DOCTYPE html>", "")
    return parse_page

app = FastAPI()

app.mount("/static", StaticFiles(directory="../../frontend/build/static"), name="static")
templates = Jinja2Templates(directory="../../frontend/build")

@app.get("/")
def hello_world():
    return {"message": "Hello World"}


@app.get("/api/v1")
def show_statics(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/ap1/v1/start-crawling/xpath")
async def post_xpath(selector: Selector):
    return None


@app.get("/api/v1/newcrawl")
async def get_url(link: str):
    PageToParse.parsed_page = parsing(link)
    parsed_page = {"parsed_page": PageToParse.parsed_page}
    return parsed_page
