import logging
import os
import re
from datetime import datetime

import pyppeteer
from sqlalchemy.orm import Session

from src.crawling.communicators import Communicators
from src.database import fake_db
from src.database.database_schemas import Links, Notifications, Scripts
from src.user import user_service

from .models.crawl_data_model import CrawlData, CrawlDataCreate

logger = logging.getLogger("Noticrawl")


async def parse(url):
    logging.getLogger("websockets").setLevel("WARN")

    browser = await pyppeteer.launch(
        headless=True, 
        args=["--no-sandbox"], 
        logLevel="WARN"
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


def get_crawls_by_user(db: Session, user_email: str):
    user = user_service.get_user_by_email(db, user_email)
    return list(
        map(
            get_crawl_from_link,
            user.links
        )
    )


def get_crawl_from_link(link: Links) -> CrawlData:
    script = link.scripts[0]
    notification = script.notifications[0]             
    return CrawlData(
        crawl_id=link.link_id,
        name=script.script_name,
        url=link.url,
        xpath=script.instructions,
        period=script.period,
        email=notification.address,
        element_value=script.element_value
    )


# todo wywalić
def add_crawl_to_fake_db(crawl_data: CrawlData):
    fake_db.crawls.append(crawl_data)


def add_crawl_to_db(db: Session, crawl_data: CrawlData):
    user_id = user_service.get_user_by_email(db, crawl_data.email).user_id
    link = Links(
        url=crawl_data.url,
        user_id=user_id
    )
    db.add(link)
    db.flush()
    db.refresh(link)

    script = Scripts(
        script_name=crawl_data.name,
        instructions=crawl_data.xpath,
        element_value=crawl_data.element_value,
        period=crawl_data.period,
        link_id=link.link_id
    )
    db.add(script)
    db.flush()
    db.refresh(script)

    notification = Notifications(
        address=crawl_data.email,
        communicator=Communicators.email,
        script_id=script.script_id
    )
    db.add(notification)
    db.flush()

    db.commit()


def update_crawl_in_db(crawl_id: int, crawl_data: CrawlDataCreate, db: Session):
    db.query(Links) \
        .filter(Links.link_id == crawl_id) \
        .update(
            {Links.url: crawl_data.url},
            synchronize_session=False
        )

    db.query(Scripts) \
        .filter(Scripts.link_id == crawl_id) \
        .update({
                Scripts.script_name: crawl_data.name,
                Scripts.instructions: crawl_data.xpath,
                Scripts.period: crawl_data.period
            },
            synchronize_session=False
        )

    db.query(Notifications) \
        .filter(Notifications.script_id == crawl_id) \
        .update(
            {Notifications.address: crawl_data.email},
            synchronize_session=False
        )

    db.commit()

    return get_crawl_from_link(
        db.query(Links).filter(Links.link_id == crawl_id).first()
    )


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


async def take_screenshot(url, filename="sreenshot", directory="/app/logs/sreenshots"):
    filename = filename + datetime.now().strftime("_%d-%m-%Y_%H-%M-%S-%f") + ".png"
    path = directory + "/" + filename
    os.makedirs(os.path.dirname(path), exist_ok=True)
    logging.getLogger("websockets").setLevel("WARN")
    browser = await pyppeteer.launch(
        headless=True, args=["--no-sandbox"], logLevel="WARN"
    )
    page = await browser.newPage()
    await page.goto(url, waitUntil="networkidle0", timeout=600000)
    await page.screenshot(path=path, fullPage=True)
    await page.close()
    await browser.close()
    return
