//https://www.espn.com/f1/schedule

//tirar do sitie acima já que estava dando erro

const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const PORT = 800

const app = express()

const url = 'https://www.espn.com/f1/schedule'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        $('tr', html).each(function(){
            const team = $(this).find('.date__col Table__TD').text()
            articles.push({
                team
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT,()=> console.log(`server runing on PORT : ${PORT}`))