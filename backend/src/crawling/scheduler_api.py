import logging

from .models.crawl_data_model import CrawlData
from .scheduler import Scheduler


logger = logging.getLogger("Noticrawl")

scheduler = Scheduler()


async def run_scheduler():
    while True:
        try:
            await scheduler.create()
            await scheduler.run()
        except:
            logger.log(level=logging.DEBUG, msg="Exception in scheduler!")
            scheduler.reload_crawls()


async def add_crawl(crawl: CrawlData):
    await scheduler.add_crawl(crawl)


def update_crawl(crawl: CrawlData):
    scheduler.update_crawl(crawl)


def delete_crawl(crawl_id):
    scheduler.delete_crawl(crawl_id)
