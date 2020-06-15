import logging
from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from src.auth.auth_service import verify_token
from src.database.database_schemas import Links, Users
from src.helpers.crawling import data_selector
from src.helpers.database import get_db
from src.helpers.debug import save_to_html
from src.helpers.status_code_model import StatusCodeBase

from . import crawling_service
from .models.crawl_data_model import CrawlData, CrawlDataCreate
from .models.page_model import Page
from .models.url_model import Url

logger = logging.getLogger("Noticrawl")

crawling_router = APIRouter()


@crawling_router.post(
    "/api/v1/page",
    dependencies=[Depends(verify_token)],
    response_model=Page,
    responses={
        401: {"model": StatusCodeBase, "description": "Not logged in"},
    },
    tags=["Crawling"],
)
async def get_page(url: Url):
    page_url = url.url
    html, page_title = await crawling_service.parse(page_url)
    html = crawling_service.fix_relative_paths(html, page_url)
    # save_to_html(data=html, filename=page_title)
    return Page(url=page_url, html=html)


@crawling_router.post(
    "/api/v1/crawling-data",
    response_model=CrawlData,
    responses={
        401: {"model": StatusCodeBase, "description": "Not logged in"},
    },
    tags=["Crawling"],
)
async def add_crawl(
        crawl_data_create: CrawlDataCreate, 
        email=Depends(verify_token), 
        db: Session = Depends(get_db)
    ):
    crawl_data_dict = crawl_data_create.dict()
    for key in crawl_data_dict.keys():
        if crawl_data_dict[key] is None:
            raise HTTPException(status_code=422, detail=f"Field \"{key}\" is missing.")

    crawl_data = CrawlData.construct(
        _fields_set=crawl_data_create.__fields_set__,
        **crawl_data_dict
    )

    crawl_data.element_value = await data_selector(
        crawl_data_create.url, crawl_data_create.xpath
    )
    await crawling_service.add_crawl_to_db(db, crawl_data, email)
    # logger.log(level=logging.DEBUG, msg="Crawl saved: " + str(crawl_data))


@crawling_router.patch(
    "/api/v1/crawling-data/{crawl_id}",
    dependencies=[Depends(verify_token)],
    response_model=CrawlData,
    responses={
        401: {"model": StatusCodeBase, "description": "Not logged in"},
        404: {"model": StatusCodeBase, "description": "Crawl not found"}
    },
    tags=["Crawling"],
)
async def update_crawl(
        crawl_id: int,
        crawl_data: CrawlDataCreate,
        db: Session = Depends(get_db)
    ):
    link = db.query(Links).filter(Links.link_id == crawl_id).first()
    if link is None:
        raise HTTPException(status_code=404, detail=f"Crawl {crawl_id} not found")
   
    stored_crawl_model = crawling_service.get_crawl_from_link(link)
    update_data = crawl_data.dict(exclude_unset=True)
    updated_crawl_model = stored_crawl_model.copy(update=update_data)
    return crawling_service.update_crawl_in_db(crawl_id, updated_crawl_model, db)


@crawling_router.get(
    "/api/v1/crawling-data/me",
    response_model=List[CrawlData],
    responses={
        401: {"model": StatusCodeBase, "description": "Not logged in"},
    },
    tags=["Crawling"],
)
async def read_crawls(
        user_email: str = Depends(verify_token),
        db: Session = Depends(get_db)
    ):
    return crawling_service.get_crawls_by_user(db, user_email=user_email)


@crawling_router.delete(
    "/api/v1/crawling-data/{crawl_id}",
    responses={
        401: {"model": StatusCodeBase, "description": "Not logged in"},
        403: {"model": StatusCodeBase, "description": "Forbidden"},
        404: {"model": StatusCodeBase, "description": "Crawl not found"}
    },
    tags=["Crawling"],
)
async def delete_crawl(
        crawl_id: int,
        email=Depends(verify_token),
        db: Session = Depends(get_db)
    ):
    link = db.query(Links).filter(Links.link_id == crawl_id).first()
    if link is None:
        raise HTTPException(status_code=404, detail=f"Crawl {crawl_id} not found")

    sender = db.query(Users).filter(Users.email == email).first()
    if sender.user_id != link.user_id:
        raise HTTPException(status_code=403, detail="Not an owner of the crawl")

    crawling_service.delete_crawl(crawl_id, db)
