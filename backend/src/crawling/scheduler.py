import asyncio
import logging
import threading
from urllib3.util import parse_url

from src.crawling.crawling_service import take_screenshot
from src.database import fake_db

from .crawling_service import data_selector
from .models.crawl_data_model import CrawlData

logger = logging.getLogger("Noticrawl")

def run():
    loop = asyncio.get_event_loop()
    t = threading.Thread(target=loop_in_thread, args=(loop,))
    t.start()

def loop_in_thread(loop):
    asyncio.set_event_loop(loop)
    loop.run_until_complete(check_for_change())


async def check_for_change():
    while True:
        # logger.log(level=logging.DEBUG, msg="Checking crawls...")
        for crawl_data in fake_db.crawls:
            current_value = await data_selector(url=crawl_data.url, xpath=crawl_data.xpath)
            if current_value != crawl_data.value:
                msg = (
                        "URL: " + crawl_data.url  + "\n" +
                        "Old value: " + crawl_data.value  + "\n" +
                        "New value: " + str(current_value)
                    )
                logger.log(level=logging.DEBUG, msg=msg)

                filename = parse_url(crawl_data.url).host.replace(".", "_")
                asyncio.create_task(take_screenshot(crawl_data.url, filename=filename))

                idx = fake_db.crawls.index(crawl_data)
                crawl_data.value = current_value
                fake_db.crawls[idx] = crawl_data

        await asyncio.sleep(10)
