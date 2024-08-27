# GPT Vision Scraper

Still parsing the DOM for web scraping?  This project demonstrates how you can use screenshots, parsed by GPT4o to scrape data from the web.

It uses Puppeteer (with stealth plugin) to screenshot a website.

## How to

1. Install dependencies:
    ```bash
    npm install
    ```

2. Config

    - Set your OpenAI API Key in .env
    - Add your URLs to src/config.ts
    - Add your one-shot prompt to src/config.ts

3. Build the project:
    ```bash
    npm run build
    ```

4. Run:
     ```bash
    npm run start
    ```


Tips;

- Be aware that you can screenshot a portion of the page, or the full length of a long scrollable page.
- Targetted screenshots work best
- You could make multiple calls to GPT.. firstly to do OCR (simply pull the text out) and another to structure it how you please.
- This probably isn't as accurate as traditional scraping methods - however it will work on almost any website by default.
