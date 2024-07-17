const puppeteer = require('puppeteer-core')
const { executablePath } = require('puppeteer')

const URL = 'https://www.avito.ru/stavropol/kvartiry/prodam-ASgBAgICAUSSA8YQ?context=H4sIAAAAAAAA_0q0MrSqLraysFJKK8rPDUhMT1WyLrYyNLNSKk5NLErOcMsvyg3PTElPLVGyrgUEAAD__xf8iH4tAAAA'

async function startCrawler() {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: executablePath(),
    })
    const page = await browser.newPage()
    await page.goto(URL)

    await getFlatsLinksForOnePage(page)

    await browser.close()

  } catch (error) {
    console.error(error)
  }
}

async function getFlatsLinksForOnePage(page) {
  try {
    console.log(page)
      const items = await page.locator('a[data-marker="item-title"]')
      console.log(items)
      const links = new Array(items).map(link => link.href)
      console.log(links)

  } catch (error) {
    console.error(error)
  }
}

startCrawler()
