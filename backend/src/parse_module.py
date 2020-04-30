from requests_html import HTMLSession
from pyppeteer import launch
import asyncio

async def parse_pup(url):
    browser = await launch({"headless": False})
    page = await browser.newPage()
    await page.goto(url)
    html_content = await page.content()
    f = open("page.txt", "w+")
    f.write(html_content)
    f = open("page.txt", "r")
    parse_page = f.read()
    await browser.close()
    return parse_page

print(asyncio.get_event_loop().run_until_complete(parse_pup("https://miyakogi.github.io/pyppeteer/")))


def html(url):
    session = HTMLSession()
    r = session.get(url)
    parse_page = r.text
    return parse_page

print(html("https://www.wp.pl/"))
