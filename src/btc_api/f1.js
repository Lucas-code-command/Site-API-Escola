const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const port = 5000

const url = "https://www.theguardian.com/international"

const app = express()

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.fc-item__title',html).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })

        console.log(articles)
        })



app.listen(port, `Server: ${port}`)


