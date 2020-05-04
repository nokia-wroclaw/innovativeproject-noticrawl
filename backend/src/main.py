from typing import List
import logging
from fastapi import FastAPI, Request
from pydantic import BaseModel, BaseConfig
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.requests import Request
from pyppeteer import launch
#from backend.src.parse_module import parse

from .database import models
from .database.connection import SessionLocal
from .user.user_controller import user_router

app = FastAPI()
app.include_router(user_router)

models.create_models()

async def parse(url):
    logging.getLogger("websockets").setLevel("WARN")
    browser = await launch(headless = True, args = ["--no-sandbox"], logLevel = "WARN")
    page = await browser.newPage()
    await page.goto(url)
    html = await page.content()
    await browser.close()
    return html

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
    parsed_link = await parse(url.link)
    #f = open("page_html.txt", "r", encoding="utf-8")
    #parsed_link = f.read()
    url_dict.update({"parsedPage": parsed_link})
    return url_dict

@app.post("/api/v1/start-crawling")
async def post_xpath(selector: Selector):
    selector_dict = selector.dict()
    selector_xpath = selector.path
    selector_dict.update({"parsedPage": selector_xpath})
    return selector_dict

@app.get("/hello")
def hello_world():
    return {"message": "Hello World"}
