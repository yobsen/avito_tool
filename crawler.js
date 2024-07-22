const puppeteer = require('puppeteer-core')
const { executablePath } = require('puppeteer')

const URL = 'https://www.avito.ru/stavropol/kvartiry/prodam-ASgBAgICAUSSA8YQ?context=H4sIAAAAAAAA_0q0MrSqLraysFJKK8rPDUhMT1WyLrYyNLNSKk5NLErOcMsvyg3PTElPLVGyrgUEAAD__xf8iH4tAAAA&s=104'

async function crawl() {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: executablePath(),
    })
    const page = await browser.newPage()
    await page.goto(URL, { waitUntil: 'load', timeout: 0 })

    const flatsLinksForOnePage = await page.$$eval('a[data-marker="item-title"]', items => { 
      return items.map(link => link.href)
    })
    console.log(flatsLinksForOnePage)

  } catch (error) {
    console.error(error)
  }
  //} finally {
  //  browser?.close()
  //}
}

crawl()
