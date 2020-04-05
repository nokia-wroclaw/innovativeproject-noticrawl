from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

app.mount("/static", StaticFiles(directory="build2/static"), name="static2")
templates = Jinja2Templates(directory="build2")

#Link
@app.get("/app/v1/link")
def link_view(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


app.mount("/static", StaticFiles(directory="build/static"), name="static")
templates2 = Jinja2Templates(directory="build")

#Login
@app.get("/app/v1/login")
def login_view(request: Request):
    return templates2.TemplateResponse("index.html", {"request": request})


