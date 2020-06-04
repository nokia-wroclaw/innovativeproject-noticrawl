import logging

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from src.auth.auth_service import verify_token
from src.helpers.database import get_db

from . import crawling_service
from .models.crawl_data_model import CrawlData
from .models.page_model import Page
from .models.url_model import Url

logger = logging.getLogger("Noticrawl")

crawling_router = APIRouter()



@crawling_router.post("/api/v1/page", dependencies=[Depends(verify_token)], response_model=Page)
async def get_page(url: Url):
    # logger.log(level=logging.DEBUG, msg="GET /api/v1/page url:" + url.url)
    page_url = url.url
    html, page_title = await crawling_service.parse(page_url)
    html = crawling_service.fix_relative_paths(html, page_url)
    # save_to_html(data=html, filename=page_title)
    return Page(url=page_url, html=html)


@crawling_router.post("/api/v1/crawling-data", dependencies=[Depends(verify_token)], response_model=CrawlData)
async def add_crawl(crawl_data: CrawlData, db: Session = Depends(get_db)):
    crawl_data.value = await crawling_service.data_selector(crawl_data.url, crawl_data.xpath)
    crawling_service.add_crawl_to_db(db, crawl_data)
    logger.log(level=logging.DEBUG, msg="Crawl saved: " + str(crawl_data))
    return


@crawling_router.patch("/api/v1/crawling-data/{crawl_id}", dependencies=[Depends(verify_token)])
async def update_crawl(
            crawl_data: CrawlData,
            crawl_id: int,
            db: Session = Depends(get_db)
        ):
    db_crawl = crawling_service.update_crawl_in_db(db, crawl_data, crawl_id)
    return db_crawl


@crawling_router.get("/api/v1/crawling-data/{user_id}")
async def read_crawls(
            user_email: str = Depends(verify_token),
            db: Session = Depends(get_db)
        ):
    db_crawls = crawling_service.get_crawls_by_user(db, user_email=user_email)
    if db_crawls is None:
        raise HTTPException(status_code=404, detail="Crawls not found")
    return db_crawls
