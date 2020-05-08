from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel

from src.helpers.debug import save_to_html

from .database import models
from .parse_module import data_selector, parse,update_parsed_page
from .user.user_controller import user_router

# change class name:


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
    parsed_page, page_title = await parse(url.link)
    # logger = logging.getLogger("Noticrawl")
    # logger.log(level=logging._nameToLevel["DEBUG"], msg=parsed_page)
    updated_parsed_page=update_parsed_page(parsed_page,url.link)
    save_to_html(data=updated_parsed_page, filename=page_title)
    url_dict.update({"parsedPage": updated_parsed_page})
    return url_dict


# change url
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
