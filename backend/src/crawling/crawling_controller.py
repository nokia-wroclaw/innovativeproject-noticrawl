import logging

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from src.helpers.database import get_db
from src.helpers.debug import save_to_html

from . import crawling_service
from .models.crawl_data_model import CrawlData
from .models.page_model import Page
from .models.url_model import Url

logger = logging.getLogger("Noticrawl")

crawling_router = APIRouter()


@crawling_router.post("/api/v1/page", response_model=Page)
async def get_page(url: Url):
    # logger.log(level=logging.DEBUG, msg="GET /api/v1/page url:" + url.url)
    page_url = url.url
    html, page_title = await crawling_service.parse(page_url)
    html = crawling_service.fix_relative_paths(html, page_url)
    # save_to_html(data=html, filename=page_title)
    return Page(url=page_url, html=html)


@crawling_router.post("/api/v1/crawl")
def add_crawl(crawl_data: CrawlData):
    crawling_service.add_crawl_to_fake_db(crawl_data)
