import scrapy

class WpSpider(scrapy.Spider):
    name = "wp"
    def start_requests(self):
        urls = [
            "https://www.wp.pl/"
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = 'wp-%s.html' % page
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log('Saved file %s' % filename)
        return page

#Inside scrapy_project: scrapy crawl wp
#Scrapy shell "https://www.wp.pl/""
#In scrapy shell:
#Selector returns more than one result:
#response.xpath("//div[7]/div[1]/div[3]/div[3]/div[4]/div[2]/a/div[2]/div[2]").getall()
#First result:
#response.xpath("//div[7]/div[1]/div[3]/div[3]/div[4]/div[2]/a/div[2]/div[2]").get()
#Only text:
#response.xpath("//div[7]/div[1]/div[3]/div[3]/div[4]/div[2]/a/div[2]/div[2]/text()").get()
