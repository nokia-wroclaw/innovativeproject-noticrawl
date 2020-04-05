import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    def start_requests(self):
        urls = [
            'http://quotes.toscrape.com/page/1/',
            'http://quotes.toscrape.com/page/2/',
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = 'quotes-%s.html' % page
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log('Saved file %s' % filename)

#inside scrapy_project: scrapy crawl quotes
#Scrapy shell "http://quotes.toscrape.com/page/1/"
#In scrapy shell:
#Selector returns more than one result:
#response.xpath("/html/body/div/div[2]/div[1]/div[1]/span[1]").getall()
#First result:
#response.xpath("/html/body/div/div[2]/div[1]/div[1]/span[1]").get()
#Only text:
#response.xpath("/html/body/div/div[2]/div[1]/div[1]/span[1]/text()").get()

