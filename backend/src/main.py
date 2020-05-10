from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .database import database_schemas
from .user.user_controller import user_router
from .crawling.crawling_controller import crawling_router


app = FastAPI()
app.include_router(user_router)
app.include_router(crawling_router)

database_schemas.create()

app.mount("/static", StaticFiles(directory="../frontend/build/static"), name="static")
templates = Jinja2Templates(directory="../frontend/build")


### just for testing purpose ################

@app.get("/")
@app.get("/{cokolwiek}")
@app.get("/new-crawl/start-crawling")
def show_statics(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


##################################################


@app.get("/hello")
def hello_world():
    return {"message": "Hello World"}
