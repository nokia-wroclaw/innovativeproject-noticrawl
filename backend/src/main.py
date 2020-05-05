from typing import List
import logging
from fastapi import FastAPI, Request
from pydantic import BaseModel, BaseConfig
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.requests import Request
from pyppeteer import launch
#from backend.src.parse_module import parse
import os
from datetime import datetime

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
    page_title = await page.title()
    html = await page.content()
    await browser.close()
    return html, page_title

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
    parsed_page, page_title = (await parse(url.link))
    # logger = logging.getLogger("Noticrawl")
    # logger.log(level=logging._nameToLevel["DEBUG"], msg=parsed_page)
    saveToHtml(data=parsed_page, filename=page_title)
    url_dict.update({"parsedPage": parsed_page})
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

def saveToHtml(data: str, filename = "log", directory = "/app/logs/parsed_pages"):
    os.makedirs(os.path.dirname(directory), exist_ok=True)
    filename=filename + datetime.now().strftime("_%d-%m-%Y_%H-%M-%S-%f") + ".html"
    path = directory + "/" + filename
    os.makedirs(os.path.dirname(path), exist_ok=True)
    f = open(path, "w", encoding="utf-8")
    f.write(data)
    f.close()
    