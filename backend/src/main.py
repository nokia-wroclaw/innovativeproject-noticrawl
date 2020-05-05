from fastapi import FastAPI, Request
from pydantic import BaseModel, BaseConfig
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.requests import Request

from .database import models
from .database.connection import SessionLocal
from .user.user_controller import user_router
from .parse_module import parse, data_selector

#change class name:
class Data(BaseModel):
    link: str

class CrawlingData(BaseModel):
    email: str
    xpath: str
    time: int

app = FastAPI()
app.include_router(user_router)

models.create_models()
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
    url_dict.update({"parsedPage": parsed_link})
    return url_dict

#change url
@app.post("api/v1/crawling-data")
async def post_crawling_data(crawling_data: CrawlingData):
    crawling_data_dict = crawling_data.dict()
    email = crawling_data.email
    time = crawling_data.time
    xpath_value = data_selector("http://www.mojapogoda.com/", crawling_data.xpath)
    crawling_data_dict.update({"email": email, "xpath": xpath_value, "time": time})
    return {"Status": "WOW"}


@app.get("/hello")
def hello_world():
    return {"message": "Hello World"}
