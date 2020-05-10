from fastapi import APIRouter
import logging

from src.helpers.database import get_db
from src.helpers.debug import save_to_html

from .crawling_service import data_selector, fix_relative_paths, parse
from .models.url_model import Url
from .models.page_model import Page
from .models.crawl_data_model import CrawlData

crawling_router = APIRouter()

logger = logging.getLogger("Noticrawl")

@crawling_router.post("/api/v1/page", response_model=Page)
async def get_page(url: Url):
    # logger.log(level=logging.DEBUG, msg="GET /api/v1/page url:" + url.url)
    page_url = url.url
    html, page_title = await parse(page_url)
    html = fix_relative_paths(html, page_url)
    # save_to_html(data=html, filename=page_title)
    return Page(url=page_url, html=html)


# change url
@crawling_router.post("api/v1/crawling-data")
async def post_crawling_data(crawling_data: CrawlData):
    crawling_data_dict = crawling_data.dict()
    email = crawling_data.email
    time = crawling_data.time
    xpath_value = data_selector("http://www.mojapogoda.com/", crawling_data.xpath)
    crawling_data_dict.update({"email": email, "xpath": xpath_value, "time": time})
    return {"Status": "WOW"}
