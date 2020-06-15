import asyncio
import logging
import time

from dynaconf import settings

from src.database.database_schemas import Links
from src.helpers.database import get_db

from src.helpers.crawling import data_selector, take_screenshot

from .models.crawl_data_model import CrawlData

logger = logging.getLogger("Noticrawl")

MAX_RUNNING_CRAWLS = settings.as_int("MAX_RUNNING_CRAWLS")
MAX_WAITING_CRAWLS_QUEUE_SIZE = settings.as_int("MAX_WAITING_CRAWLS_QUEUE_SIZE")

class Scheduler:
    __scheduler = None

    def __init__(self):
        if not self.__scheduler:
            self.__scheduler = self.__Scheduler()

    async def run_scheduler(self):
        await self.__scheduler.create()
        await self.__scheduler.run()

    async def add_crawl(self, crawl: CrawlData):
        await self.__scheduler.add_crawl(crawl)


    class __Scheduler:
        __waiting_crawls: asyncio.PriorityQueue
        __running_crawls_num: int


        async def create(self):
            self.__waiting_crawls = asyncio.PriorityQueue(
                maxsize=MAX_WAITING_CRAWLS_QUEUE_SIZE
            )
            self.__running_crawls_num = 0

            links = self.__get_all_links()
            for link in links:
                for script in link.scripts:
                    await self.add_crawl(
                        CrawlData(
                            name=script.script_name,
                            url=link.url,
                            period=script.period,
                            email=script.notifications[0].address,
                            crawl_id=link.link_id,
                            xpath=script.instructions,
                            element_value=script.element_value,
                        )
                    )


        async def add_crawl(self, crawl: CrawlData):
            await self.__waiting_crawls.put((time.time() + crawl.period, crawl))


        async def run(self):
            # loop = asyncio.new_event_loop()
            loop = asyncio.get_event_loop()
            while True:
                logger.log(level=logging.DEBUG, msg=f"Number of waiting crawls = {self.__waiting_crawls.qsize()}.")
                moment_of_exec, crawl = await self.__waiting_crawls.get()
                logger.log(level=logging.DEBUG, msg=f"Got crawl {crawl.name} from queue.")
                time_to_wait = moment_of_exec - time.time()
                if time_to_wait > 0:
                    logger.log(level=logging.DEBUG, msg=f"Sleeping for {time_to_wait} seconds")
                    await asyncio.sleep(time_to_wait)

                logger.log(level=logging.DEBUG, msg=f"Running check for change for crawl {crawl.name}. Number of running crawls = {self.__running_crawls_num}.")
                await self.__run_check_for_change(crawl, loop)
                logger.log(level=logging.DEBUG, msg=f"Putting crawl {crawl.name} back to queue.")
                await self.__waiting_crawls.put((time.time() + crawl.period, crawl))


        async def __run_check_for_change(self, crawl, loop):
            while self.__running_crawls_num >= MAX_RUNNING_CRAWLS:
                await asyncio.sleep(1)
            self.__running_crawls_num += 1
            future = asyncio.run_coroutine_threadsafe(self.__check_for_change(crawl), loop)
            future.add_done_callback(self.__decrement_running_crawls)


        def __decrement_running_crawls(self, fut):
            self.__running_crawls_num -= 1


        async def __check_for_change(self, crawl):
            logger.log(level=logging.DEBUG, msg=f"Checking crawl {crawl.name}")
            current_value = await data_selector(url=crawl.url, xpath=crawl.xpath)
            if current_value != crawl.element_value:
                msg = (
                    "   URL: "
                    + crawl.url
                    + "\n"
                    + "   Old value: "
                    + crawl.element_value
                    + "\n"
                    + "   New value: "
                    + str(current_value)
                )
                logger.log(level=logging.DEBUG, msg="Value changed! \n" + msg)
                
                #TODO update crawl

                screenshot_name = crawl.crawl_id + time.time_ns()
                await take_screenshot(crawl.url, filename=screenshot_name) #TODO screenshots seems not to be saved
                logger.log(level=logging.DEBUG, msg="Here screenshot will be sent.") # TODO send email




        def __get_all_links(self):
            db = next(get_db())
            return db.query(Links).all()

scheduler = Scheduler()
