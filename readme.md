# Best Proxies for Web Scraping in 2022

Today we compare four different proxies in two different categoies: speed and success rate. We'll test on both an easy site and a very difficult one.

The four proxies that we will be testing are:

- [ScrapingBee](https://www.scrapingbee.com?fpr=jordan-hansen52)
- [Luminati/BrightData](https://brightdata.grsm.io/jordanhansen6276)
- [ScraperAPI](https://www.scraperapi.com?fpr=jbsg)
- [ProxyCrawl](https://proxycrawl.com/?s=ukQB9Fqz)

## Getting Started

Clone the repository and run `npm i`.

You will need a API keys for each service. Sign up above to get the keys.

Update the `.sample.env` file with your keys and rename it to `.env`.

`npm start` to run it.

### Pizza.com Results
The average speed and total error rate for 20 scrapes using the specified proxy.

| Proxy | Speed | Errors |
| --- | --- | --- |
| Luminati | 0.1875 ✅ | 0 ✅ |
| ScrapingBee | 3.7455 ✅ | 0 ✅ |
| ScraperAPI | 6.962 ✅ | 0 ✅ |
| ProxyCrawl | 19.843 ❌ | 0 ✅ |


### FastPeopleSearch.com Results
The average speed and total error rate for 20 scrapes using the specified proxy.

| Proxy | Speed | Errors |
| --- | --- | --- |
| Luminati | 1.704 ✅ | 11 ❌ |
| ScrapingBee | 3.574 ✅ | 2 ✅ |
| ScraperAPI | 6.962 | 0  |
| ProxyCrawl | 5.831 ✅ | 10 ❌ |



### Prerequisites

Tested on Node v16.13.2 and NPM v8.1.2

### Installing

After installing [NodeJS](https://nodejs.org/en/) you should be able to just run the following in the terminal.

```
npm i
```

## Built With

* [axios](https://github.com/axios/axios) - Axios

## Authors

* **Jordan Hansen** - *Initial work* - [Jordan Hansen](https://github.com/aarmora)


## License

This project is licensed under the ISC License