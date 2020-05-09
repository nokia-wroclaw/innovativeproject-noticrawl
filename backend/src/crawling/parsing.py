# import asyncio
import logging

import pyppeteer


# Parse page
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


# CSS selector
async def css_selector(url):
    logging.getLogger("websockets").setLevel("WARN")
    browser = await pyppeteer.launch(
        headless=True, args=["--no-sandbox"], logLevel="WARN"
    )
    page = await browser.newPage()
    await page.goto(url, waitUntil="networkidle2")
    element = await page.querySelector(".bTbEzd > div:nth-child(2) > a:nth-child(2)")
    title = await page.evaluate("(element) => element.textContent", element)
    await page.close()
    await browser.close()
    return title


# print(asyncio.get_event_loop().run_until_complete(css_selector("https://www.youtube.com/")))


# no sandbox problem
# websocket 8.0 -> 6.0
async def xpath_selector(url):
    logging.getLogger("websockets").setLevel("WARN")
    browser = await pyppeteer.launch(
        headless=True, args=["--no-sandbox"], logLevel="WARN"
    )
    page = await browser.newPage()
    await page.goto(url, waitUntil="networkidle2", timeout=100000)
    await page.waitForXPath("/html/body/div[4]/main/div[3]/div/ul/li/img")
    xpath = await page.xpath("/html/body/div[4]/main/div[3]/div/ul/li/img")
    text = await page.evaluate("(xpath) => xpath.textContent", xpath[0])
    await page.close()
    await browser.close()
    return text


# print(asyncio.get_event_loop().run_until_complete(xpath_selector("https://github.com/")))


# data_selector
async def data_selector(url, xpath):
    logging.getLogger("websockets").setLevel("WARN")
    browser = await pyppeteer.launch(
        headless=True, args=["--no-sandbox"], logLevel="WARN"
    )
    page = await browser.newPage()
    await page.goto(url, waitUntil="networkidle2", timeout=100000)
    await page.waitForXPath(xpath)
    xpath_content = await page.xpath(xpath)
    text_content = await page.evaluate(
        "(xpath_content) => xpath_content.textContent", xpath_content[0]
    )
    await page.close()
    await browser.close()
    return text_content
