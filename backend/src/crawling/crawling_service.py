import logging
import re

import pyppeteer
from sqlalchemy.orm import Session

from src.user.user_model import User
from src.database.database_schemas import Users
from src.database import fake_db

from .models.crawl_data_model import CrawlData
from .models.link_model import LinkCreate
from .models.notification_model import NotificationCreate
from .models.script_model import ScriptCreate


async def parse(url):
    logging.getLogger("websockets").setLevel("WARN")
    browser = await pyppeteer.launch(
        headless=True, args=["--no-sandbox"], logLevel="WARN"
    )
    page = await browser.newPage()
    await page.goto(url)
    page_title = await page.title()
    html = await page.content()
    await browser.close()
    return html, page_title


# add_base_href_to_html
def fix_relative_paths(html: str, url: str):
    base_url = re.search(r"(?P<url>https?://[/\w+$]+.[/\w+$][^/]*)", url).group("url")
    base_href = '<base href="' + base_url + '">'
    return base_href + "\n" + html


def add_crawl_to_fake_db(crawl_data: CrawlData):
    fake_db.crawls.append(crawl_data)

# def add_crawl_to_db(db: Session, crawl_data: CrawlData):
    # user_id = (db.query(Users).filter(Users.email == crawl_data.email).first()).user_id
    # link = LinkCreate(url=crawl_data.url, user_id=user_id)
    # db.add(link)
    # db.commit()
    # db.refresh(link)
    # script = ScriptCreate(instructions=crawl_data.xpath, link_id=link.link_id)


async def data_selector(url, xpath):
    logging.getLogger("websockets").setLevel("WARN")
    browser = await pyppeteer.launch(
        headless=True, args=["--no-sandbox"], logLevel="WARN"
    )
    page = await browser.newPage()
    await page.goto(url, waitUntil="networkidle0", timeout=600000)
    await page.waitForXPath(xpath)
    xpath_content = await page.xpath(xpath)
    text_content = await page.evaluate(
        "(xpath_content) => xpath_content.textContent", xpath_content[0]
    )
    await page.close()
    await browser.close()
    return text_content
