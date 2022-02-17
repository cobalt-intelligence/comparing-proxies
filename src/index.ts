import axios from 'axios';
import dotenv from 'dotenv';
import cheerio from 'cheerio';
import HttpsProxyAgent from 'https-proxy-agent';
import { performance } from 'perf_hooks';

dotenv.config();

(async () => {
    // await scrapingFastPeopleSearchLuminati();
    // await scrapingFastPeopleSearchScrapingBee();
    // await scrapingFastPeopleSearchScraperAPI();
    await scrapingFastPeopleSearchProxyCrawl();

    // Luminati pizza.com
    // Average Speed 0.1875 seconds
    // Errors - 0
    
    // ScrapingBee pizza.com
    // Average Speed 3.7455 seconds
    // Errors - 0
    
    // ScraperAPI pizza.com
    // Average Speed 6.962 seconds
    // Errors - 0
    
    // ProxyCrawl pizza.com
    // Average Speed 19.843 seconds
    // Errors - 0




    // Luminati fastpeoplesearch.com
    // Average Speed 1.704 seconds
    // Errors - 11
    
    // ScrapingBee fastpeoplesearch.com
    // Average Speed 3.574 seconds
    // Errors - 2
    
    // ScraperAPI fastpeoplesearch.com
    // Average Speed 6.962 seconds
    // Errors - 0
    
    // ProxyCrawl fastpeoplesearch.com
    // Average Speed 5.831 seconds
    // Errors - 10
})();


// FastPeopleSearch uses heavy bot detection and hCatpcha
async function scrapingFastPeopleSearchScrapingBee() {
    // With render_js off
    // Need to use premium_proxy for best results - 10 credits per request
    let errors = 0;
    let times = [];
    for (let i = 0; i < 20; i++) {
        const startTime = performance.now();
        let endTime;
        try {
            const url = 'https://www.fastpeoplesearch.com/name/john-doe_biloxi-ms';
            // const url = 'http://pizza.com';
            const axiosResponse = await axios.get('https://app.scrapingbee.com/api/v1', {
                params: {
                    'api_key': process.env.scrapingBeeApiKey,
                    'url': url,
                    render_js: false,
                    premium_proxy: true,
                    country_code: 'us'
                }
            });
            endTime = performance.now();
            const $ = cheerio.load(axiosResponse.data);

            console.log('axiosResponse', $('h1').text(), i);
            const time = (endTime - startTime) / 1000;
            console.log('time', time);
            times.push(time);
        }
        catch (e) {
            endTime = performance.now();
            // ScrapingBee will throw a 500 when it hits the catpcha/403 error status
            console.log('error, we assume failure');
            errors++;
        }
    }
    console.log('total errors', errors);
    console.log('times', times, 'average time', average(times));
}

// FastPeopleSearch uses heavy bot detection and hCatpcha
async function scrapingFastPeopleSearchScraperAPI() {
    // Need to use premium=true for best results - 10 credits per request
    let errors = 0;
    let times = [];
    for (let i = 0; i < 20; i++) {
        const startTime = performance.now();
        let endTime;
        const url = 'https://www.fastpeoplesearch.com/name/john-doe_biloxi-ms';
        // const url = 'http://pizza.com';
        try {
            const axiosResponse = await axios.get(`http://api.scraperapi.com?api_key=${process.env.scraperApiApiKey}&url=${encodeURIComponent(url)}&premium=true`);
            endTime = performance.now();
            const $ = cheerio.load(axiosResponse.data);

            console.log('axiosResponse', $('h1').text(), i);
            const time = (endTime - startTime) / 1000;
            console.log('time', time);
            times.push(time);
        }
        catch (e) {
            endTime = performance.now();
            console.log('error, we assume failure');
            errors++;
        }
    }
    console.log('total errors', errors);
    console.log('times', times, 'average time', average(times));
}

// FastPeopleSearch uses heavy bot detection and hCatpcha
async function scrapingFastPeopleSearchProxyCrawl() {
    // Need to use premium=true for best results - 10 credits per request
    let errors = 0;
    let times = [];
    for (let i = 0; i < 20; i++) {
        const startTime = performance.now();
        let endTime;
        const url = 'https://www.fastpeoplesearch.com/name/john-doe_biloxi-ms';
        // const url = 'http://pizza.com';
        try {
            const axiosResponse = await axios.get(`https://api.proxycrawl.com/?token=${process.env.proxyCrawlApiKey}&url=${encodeURIComponent(url)}&premium=true`);
            endTime = performance.now();
            const $ = cheerio.load(axiosResponse.data);

            console.log('axiosResponse', $('h1').text(), i);
            const time = (endTime - startTime) / 1000;
            console.log('time', time);
            times.push(time);
        }
        catch (e) {
            endTime = performance.now();
            console.log('error, we assume failure');
            errors++;
        }
    }
    console.log('total errors', errors);
    console.log('times', times, 'average time', average(times));
}

// FastPeopleSearch uses heavy bot detection and hCatpcha
async function scrapingFastPeopleSearchLuminati() {
    // Need to use premium=true for best results - 10 credits per request
    let errors = 0;
    let times = [];
    for (let i = 0; i < 20; i++) {
        const startTime = performance.now();
        let endTime;
        const url = 'https://www.fastpeoplesearch.com/name/john-doe_biloxi-ms';
        // const url = 'http://pizza.com';
        try {
            const axiosResponse = await axios.get(url, {
                headers: {
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
                },
                proxy: false,
                httpsAgent: new HttpsProxyAgent.HttpsProxyAgent(`https://${process.env.luminatiUsername}:${process.env.luminatiPassword}@zproxy.lum-superproxy.io:22225`)
            });
            endTime = performance.now();
            const $ = cheerio.load(axiosResponse.data);

            console.log('axiosResponse', $('h1').text(), i);
            const time = (endTime - startTime) / 1000;
            console.log('time', time);
            times.push(time);
        }
        catch (e) {
            endTime = performance.now();
            console.log('error, we assume failure');
            errors++;
        }
    }
    console.log('total errors', errors);
    console.log('times', times, 'average time', average(times));
}

const average = (array) => array.reduce((a, b) => a + b) / array.length;