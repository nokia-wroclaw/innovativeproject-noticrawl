import asyncio
import logging

from fastapi import Depends, FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .auth.auth_controller import auth_router
from .auth.auth_service import verify_token
from .crawling import scheduler
from .crawling.crawling_controller import crawling_router
from .database import database_schemas
from .helpers.status_code_model import StatusCodeBase
from .user.user_controller import user_router

logger = logging.getLogger("Noticrawl")

app = FastAPI()
app.include_router(user_router)
app.include_router(crawling_router)
app.include_router(auth_router)

database_schemas.create()

asyncio.create_task(scheduler.check_for_change())

app.mount("/static", StaticFiles(directory="../frontend/build/static"), name="static")
templates = Jinja2Templates(directory="../frontend/build")


@app.get("/", tags=["Statics"])
@app.get("/404", tags=["Statics"])
def show_public_statics(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get(
    "/.*",
    dependencies=[Depends(verify_token)],
    tags=["Statics"],
    responses={
        401: {"model": StatusCodeBase, "description": "Not logged in"}
    }
)
def show_private_statics(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
