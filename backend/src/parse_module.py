import requests as req
from requests_html import HTMLSession


def parse(url):
    request = req.get(url)
    parse_page = request.text.replace("<!DOCTYPE html>", "")
    return parse_page


def html(url):
    session = HTMLSession()
    r = session.get(url)
    parse_page = r.text
    return parse_page

print(html("https://www.wp.pl/"))