const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    console.time("Page parsing");
    const browser = await puppeteer.launch(headless = true, args = ["--no-sandbox"]);
    const page = await browser.newPage();
    await page.goto("https://www.onet.pl/", {waitUntil: 'networkidle0'});
    html = await page.content()
    console.timeEnd("Page parsing");
    page_title = await page.title()
    // fs.writeFile("../logs/puppeteer/"+Date.now().toString()+".html", html, function(err) {
    //     if(err) {
    //         return console.log(err);
    //     }
    // });
    await browser.close();
})();

