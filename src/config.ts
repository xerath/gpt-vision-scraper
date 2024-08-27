
// Experiment with one-shot prompt in GPT manually before defining it here
const prompt: string = `You are a helpful web scraper bot.

Today we are scraping news websites.

Attached is a picture of the homepage of a news website.

Please tell me what the main featured headline of the news website is.

Give your response in JSON like so;

{
    "headline": "This is the headline",
    "image": This is a description of the image used
}
`

const urls: string[] = [
    'https://www.bbc.co.uk/news',
    'https://edition.cnn.com/'
]

export const config = {
    prompt, urls
}