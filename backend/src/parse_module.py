import requests as req


def parse(url):
    request = req.get(url)
    parse_page = request.text.replace("<!DOCTYPE html>", "")
    return parse_page
