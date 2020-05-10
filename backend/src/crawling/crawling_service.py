import logging
import re

import pyppeteer


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


# add_base_href_to_html
def fix_relative_paths(html: str, url: str):
    base_url = re.search(r"(?P<url>https?://[/\w+$]+.[/\w+$][^/]*)", url).group("url")
    base_href = '<base href="' + base_url + '">'
    return base_href + "\n" + html
