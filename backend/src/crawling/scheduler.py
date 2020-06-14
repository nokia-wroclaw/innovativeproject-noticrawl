import asyncio
import logging
import threading

from dynaconf import settings
from urllib3.util import parse_url

from src.crawling.crawling_service import take_screenshot
from src.database.database_schemas import Links
from src.helpers.database import get_db

from .crawling_service import data_selector

logger = logging.getLogger("Noticrawl")

MAX_VAL_CHECKING_WORKERS = settings.as_int("MAX_VAL_CHECKING_WORKERS")
MAX_WAITING_CRAWLS_QUEUE_SIZE = settings.as_int("MAX_WAITING_CRAWLS_QUEUE_SIZE")

async def run_scheduler():
    scheduler = __Scheduler()
    await scheduler.create()
    # scheduler.run()
class __Scheduler:
    waiting_crawls: asyncio.PriorityQueue


          
    async def create(self):
        self.waiting_crawls = asyncio.PriorityQueue(
            maxsize=MAX_WAITING_CRAWLS_QUEUE_SIZE
        )
        # links = get_all_links()
        # for link in links:
        #     for script in link.scripts:
        #         await self.waiting_crawls.put(
        #             (
        #                 script.period,
        #                 self.__Crawl(
        #                     link.link_id,
        #                     script.script_id,
        #                     script.instructions,
        #                     script.element_value,
        #                     script.period,
        #                 ),
        #             )
        #         )

    # def run(self):
        

    # def run():
    #     loop = asyncio.get_event_loop()
    #     t = threading.Thread(target=loop_in_thread, args=(loop,))
    #     t.start()

    # def loop_in_thread(loop):
    #     asyncio.set_event_loop(loop)
    #     loop.run_until_complete(check_for_change())


    async def __check_for_change(self):
        while True:
            # # logger.log(level=logging.DEBUG, msg="Checking crawls...")
            # for crawl_data in fake_db.crawls:
            #     current_value = await data_selector(
            #         url=crawl_data.url, xpath=crawl_data.xpath
            #     )
            #     if current_value != crawl_data.element_value:
            #         # msg = (
            #         #         "URL: " + crawl_data.url  + "\n" +
            #         #         "Old value: " + crawl_data.element_value  + "\n" +
            #         #         "New value: " + str(current_value)
            #         #     )
            #         # logger.log(level=logging.DEBUG, msg=msg)

            #         filename = parse_url(crawl_data.url).host.replace(".", "_")
            #         asyncio.create_task(take_screenshot(crawl_data.url, filename=filename))

            #         idx = fake_db.crawls.index(crawl_data)
            #         crawl_data.element_value = current_value
            #         fake_db.crawls[idx] = crawl_data

            await asyncio.sleep(10)


def get_all_links():
    db = next(get_db())
    return db.query(Links).all()
