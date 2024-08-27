﻿# GPT Vision Scraper

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
