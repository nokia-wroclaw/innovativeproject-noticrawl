import os
from datetime import datetime


def save_to_html(data: str, filename="log", directory="/app/logs/parsed_pages"):
    os.makedirs(os.path.dirname(directory), exist_ok=True)
    filename = filename + datetime.now().strftime("_%d-%m-%Y_%H-%M-%S-%f") + ".html"
    path = directory + "/" + filename
    os.makedirs(os.path.dirname(path), exist_ok=True)
    stream = open(path, "w", encoding="utf-8")
    stream.write(data)
    stream.close()
