import asyncio
import logging
import time

from dynaconf import settings

from src.database.database_schemas import Links, Scripts
from src.helpers.crawling import data_selector, take_screenshot
from src.helpers.database import get_db
from src.notifications.notifications import send_email

from .models.crawl_data_model import CrawlData

logger = logging.getLogger("Noticrawl")
# logger.setLevel("WARN")

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

    async def reload_crawls(self):
        await self.__scheduler.reload_crawls()

    class __Scheduler:
        __waiting_crawls: asyncio.PriorityQueue
        __running_crawls_num: int
        __running_crawls_futures = []

        async def create(self):
            self.__waiting_crawls = asyncio.PriorityQueue(
                maxsize=MAX_WAITING_CRAWLS_QUEUE_SIZE
            )
            self.__running_crawls_num = 0
            await self.reload_crawls()


        async def reload_crawls(self):
            links = get_all_links()
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
            loop = asyncio.get_event_loop()
            asyncio.create_task(self.__remove_done_futures())
            while True:
                # logger.log(level=logging.DEBUG, msg=f"Number of waiting crawls = {self.__waiting_crawls.qsize()}.")        

                moment_of_exec, crawl = await self.__waiting_crawls.get()
                time_to_wait = moment_of_exec - time.time()
                if time_to_wait > 0:
                    await self.__waiting_crawls.put((moment_of_exec, crawl))
                    await asyncio.sleep(1)
                else:
                    logger.log(level=logging.DEBUG, msg=f"Running check for change for crawl {crawl.name}. Number of running crawls = {len(self.__running_crawls_futures)}.")
                    await self.__run_check_for_change(crawl, loop)


        async def __run_check_for_change(self, crawl, loop):
            while  len(self.__running_crawls_futures) >= MAX_RUNNING_CRAWLS:
                await asyncio.sleep(1)
            self.__running_crawls_futures.append(asyncio.run_coroutine_threadsafe(self.__check_for_change(crawl), loop))


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
                
                update_element_value_in_db(crawl.crawl_id, current_value)
                crawl.element_value = current_value

                screenshot_name = crawl.name.replace(" ", "_")
                screenshot_path = await take_screenshot(crawl.url, filename=screenshot_name)
                send_email(
                    crawl.email, 
                    screenshot_path, 
                    f"Your crawl {crawl.name} has new value!")
                # TODO delete screenshot
            logger.log(level=logging.DEBUG, msg=f"Putting crawl {crawl.name} back to queue.")
            await self.__waiting_crawls.put((time.time() + crawl.period, crawl))

        async def __remove_done_futures(self):
            while True:
                for i, future in enumerate(self.__running_crawls_futures):
                    if future.done():
                        self.__running_crawls_futures.pop(i)
                await asyncio.sleep(1)


def update_element_value_in_db(crawl_id, element_value):
    db = next(get_db())
    db.query(Scripts) \
        .filter(Scripts.link_id == crawl_id) \
        .update(
            {Scripts.element_value: element_value},
            synchronize_session=False
        )
    db.commit()


def get_all_links():
    db = next(get_db())
    return db.query(Links).all()

scheduler = Scheduler()
