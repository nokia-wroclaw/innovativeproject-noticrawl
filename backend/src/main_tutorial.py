from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

#FastAPI instance
app = FastAPI()

class Item(BaseModel):
    name: str = None
    description: str = None

app.mount("/static", StaticFiles(directory="../../build/static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/api/v1")
def show_statics(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/")
def hello_world():
    return {"message": "Hello World"}

@app.get("/api/v1/{item_name}")
def read_item(item_name: str, query: str = None):
    return{"item_name": item_name, "myquery": query}

#http://127.0.0.1:8000/get1/v1?query=somequery
#item_name = v1 - path parameter
#query = mytext - optional str query parameter myquery

@app.get("/api/v1/{your_name}")
def read_name(your_name: str):
    return{"Hello": your_name}


def generate_html():
    html_content = """
        <html>
            <body>
                <h1>Hello Bartuś!</h1>
            </body>
        </html>
        """
    return HTMLResponse(content=html_content, status_code=200)

#GET with HTML
@app.get("/app/v3/html", response_class=HTMLResponse)
async def show_html():
    return generate_html()

#http://127.0.0.1:8000/docs
#http://127.0.0.1:8000/redoc

#PUT METHOD - update data
@app.put("/app/v4/{item_id}")
def update_item(item_id: int, item: Item):
    return{"item_name": item.name, "item_id": item_id}

#POST METHOD
@app.post("/app/v5/post")
async def create_item(item: Item):
    item_dict = item.dict()
    if True:
        message = item.description + item.name
        item_dict.update({"New Hello World": message})
    return item_dict