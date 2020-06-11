import logging
from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from src.auth.auth_service import verify_token
from src.helpers.database import get_db
from src.helpers.debug import save_to_html
from src.helpers.status_code_model import StatusCodeBase

from . import crawling_service
from .models.crawl_data_model import (CrawlDataInDb, CrawlDataInput,
                                      CrawlDataPublic)
from .models.page_model import Page
from .models.url_model import Url

logger = logging.getLogger("Noticrawl")

crawling_router = APIRouter()


@crawling_router.post(
    "/api/v1/page",
    dependencies=[Depends(verify_token)],
    response_model=Page,
    tags=["Crawling"],
    responses={
        401: {"model": StatusCodeBase, "description": "Not logged in"},
    }
)
async def get_page(url: Url):
    page_url = url.url
    html, page_title = await crawling_service.parse(page_url)
    html = crawling_service.fix_relative_paths(html, page_url)
    # save_to_html(data=html, filename=page_title)
    return Page(url=page_url, html=html)


@crawling_router.post(
    "/api/v1/crawling-data",
    dependencies=[Depends(verify_token)],
    response_model=CrawlDataPublic,
    responses={
        401: {"model": StatusCodeBase, "description": "Not logged in"},
    }
)
async def add_crawl(crawl_data_input: CrawlDataInput, db: Session = Depends(get_db)):
    crawl_data_in_db = CrawlDataInDb.construct(
        _fields_set=crawl_data_input.__fields_set__,
        **dict(crawl_data_input)
    )
    crawl_data_in_db.element_value = await crawling_service.data_selector(
        crawl_data_input.url, crawl_data_input.xpath
    )
    crawling_service.add_crawl_to_db(db, crawl_data_in_db)
    logger.log(level=logging.DEBUG, msg="Crawl saved: " + str(crawl_data_in_db))


@crawling_router.patch(
    "/api/v1/crawling-data/{crawl_id}",
    dependencies=[Depends(verify_token)],
    tags=["Auth"],
    responses={
        401: {"model": StatusCodeBase, "description": "Not logged in"},
    }
)
async def update_crawl(
        crawl_id: int,
        crawl_data: CrawlDataInput,
        db: Session = Depends(get_db)
    ):
    db_crawl = crawling_service.update_crawl_in_db(crawl_id, crawl_data, db)
    return db_crawl


@crawling_router.get(
    "/api/v1/crawling-data/me",
    tags=["Crawling"],
    response_model=List[CrawlDataPublic],
    responses={
        401: {"model": StatusCodeBase, "description": "Not logged in"},
    }
)
async def read_crawls(
        user_email: str = Depends(verify_token),
        db: Session = Depends(get_db)
    ):
    db_crawls = crawling_service.get_crawls_by_user(db, user_email=user_email)
    # if db_crawls is None:

    return db_crawls
