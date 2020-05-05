import pyppeteer
import logging
import asyncio

#Parse page
async def parse(url):
    logging.getLogger("websockets").setLevel("WARN")
    browser = await pyppeteer.launch(headless=True, args=["--no-sandbox"], logLevel="WARN")
    page = await browser.newPage()
    await page.goto(url)
    html = await page.content()
    await browser.close()
    return html


#CSS selector
async def css_selector(url):
    logging.getLogger("websockets").setLevel("WARN")
    browser = await pyppeteer.launch(headless=False, args=["--no-sandbox"], logLevel="WARN")
    page = await browser.newPage()
    await page.goto(url, waitUntil='networkidle2')
    element = await page.querySelector('.bTbEzd > div:nth-child(2) > a:nth-child(2)')
    title = await page.evaluate('(element) => element.textContent', element)
    await page.close()
    await browser.close()
    return title

#print(asyncio.get_event_loop().run_until_complete(css_selector("https://www.youtube.com/")))


#no sandbox problem
#websocket 8.0 -> 6.0
async def xpath_selector(url):
    logging.getLogger("websockets").setLevel("WARN")
    browser = await pyppeteer.launch(headless=True, logLevel="WARN")
    page = await browser.newPage()
    await page.goto(url, waitUntil='networkidle2', timeout=100000)
    await page.waitForXPath('//*[@id="content_middle_upper_area"]/ul/li[2]/div[2]/ul[2]/li/p')
    xpath = await page.xpath('//*[@id="content_middle_upper_area"]/ul/li[2]/div[2]/ul[2]/li/p')
    text = await page.evaluate('(xpath) => xpath.textContent', xpath[0])
    await page.close()
    await browser.close()
    return text

#print(asyncio.get_event_loop().run_until_complete(xpath_selector("http://www.mojapogoda.com/")))


#data_selector
async def data_selector(url, xpath):
    logging.getLogger("websockets").setLevel("WARN")
    browser = await pyppeteer.launch(headless=False, logLevel="WARN")
    page = await browser.newPage()
    await page.goto(url, waitUntil='networkidle2', timeout=100000)
    await page.waitForXPath(xpath)
    xpath_content = await page.xpath(xpath)
    text_content = await page.evaluate('(xpath_content) => xpath_content.textContent', xpath_content[0])
    await page.close()
    await browser.close()
    return text_content
