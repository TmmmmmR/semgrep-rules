const puppeteer = require('puppeteer');

async function test3(userInput) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

// ok
  await page.evaluate(x => console.log(x), 5);

  // ruleid:puppeteer-evaluate-arg-injection
  await page.evaluate(x => fetch(x), userInput);

  await page.screenshot({path: 'example.png'});
  await browser.close();
}
