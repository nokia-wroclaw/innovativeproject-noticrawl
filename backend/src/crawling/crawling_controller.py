import logging

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from src.auth.auth_service import verify_token
from src.helpers.database import get_db
from src.helpers.debug import save_to_html
from src.helpers.oauth2_scheme import oauth2_scheme

from . import crawling_service
from .models.crawl_data_model import CrawlData
from .models.page_model import Page
from .models.url_model import Url

logger = logging.getLogger("Noticrawl")

crawling_router = APIRouter()


@crawling_router.post("/api/v1/page", response_model=Page)
async def get_page(
        url: Url,
        token: dict = Depends(oauth2_scheme),
        db: Session = Depends(get_db)
    ):
    verify_token(token, db)

    page_url = url.url
    html, page_title = await crawling_service.parse(page_url)
    html = crawling_service.fix_relative_paths(html, page_url)
    # save_to_html(data=html, filename=page_title)
    return Page(url=page_url, html=html)


@crawling_router.post("/api/v1/crawling-data")
async def add_crawl(
        crawl_data: CrawlData,
        token: dict = Depends(oauth2_scheme),
        db: Session = Depends(get_db)
    ):
    verify_token(token, db)
    
    crawl_data.value = await crawling_service.data_selector(crawl_data.url, crawl_data.xpath)
    crawling_service.add_crawl_to_fake_db(crawl_data)
    logger.log(level=logging.DEBUG, msg="Crawl saved: " + str(crawl_data))
    raise HTTPException(status_code=200, detail="Crawl saved")
