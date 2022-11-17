const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const PORT = 5050

const app = express()

const url = "https://www.theguardian.com/international"
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.fc-item__title',html).each(function(){
                const title = $(this).text()
                const linked = $(this).find('a').attr('href')
                articles.push({
                    title,
                    linked
                })
        })
    })

   
app.get('/', (req, res) => {
    const url = "https://www.theguardian.com/international"
    axios(url)
        .then(res => {
            const html = res.data
            const $ = cheerio.load(html)
            const articles = []

            $('.fc-item__title',html).each(function(){
                    const title = $(this).text()
                    const linked = $(this).find('a').attr('href')
                    articles.push({
                        title,
                        linked
                    })
            })
        })
})

app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`))