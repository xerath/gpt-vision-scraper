// Load env file
require('dotenv').config({ override: true })

import { config } from './config'
import { getScreenshot } from './utils/screenshot'
import { analysis } from './utils/extraction'
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

// Helps to avoid blocking
puppeteer.use(StealthPlugin())

const scrape = async (config: any) => {

    // Headless option available but less effective for getting around blocking
    const browser: any = await puppeteer.launch({ headless: false })
    const page = await browser.newPage();

    for (const url of config.urls) {

        // Take a screenshot
        const screenshot = await getScreenshot(url, page)

        // Analyse it
        const result = await analysis(screenshot, config.prompt)
    
        // Do something with it
        console.log(result)
    }

    await page.close()
    await browser.close()
}

// Do the thing
scrape(config)