from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import HTMLResponse

#FastAPI instance
endpoints = FastAPI()

class Item(BaseModel):
    name: str = None
    description: str = None

#GET - read data
@endpoints.get("/")
def hello_world():
    return {"message": "Hello World"}

#terminal:
#uvicorn main:app --reload
#main:app - object created inside of main
#--reload make the server restart after code changes (only for development!)

@endpoints.get("/app/v1/{item_name}")
def read_item(item_name: str, query: str = None):
    return{"item_name": item_name, "myquery": query}

#http://127.0.0.1:8000/get1/v1?query=somequery
#item_name = v1 - path parameter
#query = mytext - optional str query parameter myquery


@endpoints.get("/app/v2/{your_name}")
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
@endpoints.get("/app/v3/html", response_class=HTMLResponse)
async def show_html():
    return generate_html()

#http://127.0.0.1:8000/docs
#http://127.0.0.1:8000/redoc

#PUT METHOD - update data
@endpoints.put("/app/v4/{item_id}")
def update_item(item_id: int, item: Item):
    return{"item_name": item.name, "item_id": item_id}

#POST METHOD
@endpoints.post("/app/v5/post")
async def create_item(item: Item):
    item_dict = item.dict()
    if True:
        message = item.description + item.name
        item_dict.update({"New Hello World": message})
    return item_dict
