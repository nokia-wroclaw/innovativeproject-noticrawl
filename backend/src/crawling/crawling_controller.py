import logging

from fastapi import APIRouter, Depends, HTTPException

from src.auth.auth_service import verify_token
from src.helpers.debug import save_to_html

from . import crawling_service
from .models.crawl_data_model import CrawlData
from .models.page_model import Page
from .models.url_model import Url

logger = logging.getLogger("Noticrawl")

crawling_router = APIRouter()


@crawling_router.post(
    "/api/v1/page", dependencies=[Depends(verify_token)], response_model=Page
)
async def get_page(url: Url):
    page_url = url.url
    html, page_title = await crawling_service.parse(page_url)
    html = crawling_service.fix_relative_paths(html, page_url)
    # save_to_html(data=html, filename=page_title)
    return Page(url=page_url, html=html)


@crawling_router.post("/api/v1/crawling-data", dependencies=[Depends(verify_token)])
async def add_crawl(crawl_data: CrawlData):
    crawl_data.value = await crawling_service.data_selector(
        crawl_data.url, crawl_data.xpath
    )
    crawling_service.add_crawl_to_fake_db(crawl_data)
    logger.log(level=logging.DEBUG, msg="Crawl saved: " + str(crawl_data))
    raise HTTPException(status_code=200, detail="Crawl saved")
