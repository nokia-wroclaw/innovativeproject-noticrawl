import os
from datetime import datetime


def saveToHtml(data: str, filename = "log", directory = "/app/logs/parsed_pages"):
    os.makedirs(os.path.dirname(directory), exist_ok=True)
    filename=filename + datetime.now().strftime("_%d-%m-%Y_%H-%M-%S-%f") + ".html"
    path = directory + "/" + filename
    os.makedirs(os.path.dirname(path), exist_ok=True)
    f = open(path, "w", encoding="utf-8")
    f.write(data)
    f.close()
