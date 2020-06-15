import logging
import os
from datetime import datetime

import pyppeteer

logger = logging.getLogger("Helpers")

async def data_selector(url, xpath):
    logging.getLogger("websockets").setLevel("WARN")
    browser = await pyppeteer.launch(
        headless=True, args=["--no-sandbox"], logLevel="WARN"
    )
    page = await browser.newPage()
    await page.goto(url, waitUntil="networkidle2", timeout=600000)
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
    await page.goto(url, waitUntil="networkidle2", timeout=600000)
    await page.screenshot(path=path, fullPage=True)
    await page.close()
    await browser.close()
