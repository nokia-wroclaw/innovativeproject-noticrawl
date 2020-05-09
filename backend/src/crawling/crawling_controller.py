from fastapi import APIRouter
from pydantic import BaseModel

from src.database import models
from src.helpers.debug import save_to_html
from .crawling_service import parse, data_selector

crawling_router = APIRouter()


class Data(BaseModel):
    link: str


class CrawlingData(BaseModel):
    email: str
    xpath: str
    time: int


@crawling_router.post("/api/v1/new-crawl")
async def post_link(url: Data):
    url_dict = url.dict()
    parsed_page, page_title = await parse(url.link)
    # logger = logging.getLogger("Noticrawl")
    # logger.log(level=logging._nameToLevel["DEBUG"], msg=parsed_page)
    save_to_html(data=parsed_page, filename=page_title)
    url_dict.update({"parsedPage": parsed_page})
    return url_dict


# change url
@crawling_router.post("api/v1/crawling-data")
async def post_crawling_data(crawling_data: CrawlingData):
    crawling_data_dict = crawling_data.dict()
    email = crawling_data.email
    time = crawling_data.time
    xpath_value = data_selector("http://www.mojapogoda.com/", crawling_data.xpath)
    crawling_data_dict.update({"email": email, "xpath": xpath_value, "time": time})
    return {"Status": "WOW"}
