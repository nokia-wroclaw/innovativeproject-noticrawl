import asyncio

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .crawling import scheduler
from .crawling.crawling_controller import crawling_router
from .database import database_schemas
from .user.user_controller import user_router

app = FastAPI()
app.include_router(user_router)
app.include_router(crawling_router)

database_schemas.create()

asyncio.create_task(scheduler.check_for_change())

app.mount("/static", StaticFiles(directory="../frontend/build/static"), name="static")
templates = Jinja2Templates(directory="../frontend/build")


@app.get("/.*")
def show_statics(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
