const puppeteer = require('puppeteer-core')

const URL = 'https://github.com'

async function startCrawler() {
  try {
    const browser = await puppeteer.launch()

    const page = await browser.newPage()
    await page.goto(URL)

    const body = page.locator('body')


    console.log(body)

    await browser.close()

  } catch (error) {
    console.error(error)
  }
}

startCrawler()
