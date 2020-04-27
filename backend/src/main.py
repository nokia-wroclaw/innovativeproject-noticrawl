from fastapi import FastAPI
from pydantic import BaseModel, BaseConfig
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.requests import Request
import requests as req
#from backend.src.parse_module import parse

def parse(url):
    request = req.get(url)
    parse_page = request.text
    return parse_page

class Selector(BaseModel):
    path: str

class Data(BaseModel):
    link: str

app = FastAPI()

app.mount("/static", StaticFiles(directory="../frontend/build/static"), name="static")
templates = Jinja2Templates(directory="../frontend/build")


@app.get("/")
def show_statics(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/api/v1/new-crawl")
async def post_link(url: Data):
    url_dict = url.dict()
    parsed_link = parse(url.link)
    url_dict.update({"parsedPage": parsed_link})
    return url_dict


@app.post("/api/v1/start-crawling")
async def post_xpath(selector: Selector):
    selector_dict = selector.dict()
    selector_xpath = selector.path
    selector_dict.update({"parsedPage": selector_xpath})
    return selector_dict
