// import fs from 'fs';

export const getScreenshot = async (url: string, page: any): Promise<Buffer> => {
    
    console.log('SCREENSHOTING URL', url);
    let screenshot: Buffer

    try {
        // Goto URL and get screenshot
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 });

        // Dismiss any cookie or other popups
        await clickCookiePopup(page)

        // take screenshot
        const screenshotBuffer = await page.screenshot({ type: 'jpeg', quality: 100, fullPage: true });
        screenshot = screenshotBuffer

        // save screenshot locally (optional, to debug.. be sure to create a screenshot directory in project root)
        // fs.writeFileSync(`./screenshots/${url.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`, screenshotBuffer);
        return screenshot
    } catch (error) {
        console.log('Error taking screenshot', error);
        throw error;
    }
};

// TODO : Use dictionary to make this multilingual or find another way to dismiss?
const clickCookiePopup = async (page: any) => {
    try {
        const buttons = await page.$$('button, input[type="button"]');
        for (let button of buttons) {
            const text = await page.evaluate((el: any) => el.innerText.toLowerCase(), button);
            if (text.includes('accept') || text.includes('confirm') || text.includes('agree') || text.includes('allow') || text.includes('ok') || text.includes('not now')) {
                const isVisible = await page.evaluate((el: any) => {
                    const style = window.getComputedStyle(el);
                    return style && style.display !== 'none' && style.visibility !== 'hidden';
                }, button);

                if (isVisible) {
                    try {
                        console.log('dismissed cookie popup');
                        break;
                    } catch {}
                }
            }
        }
    } catch {}
};
