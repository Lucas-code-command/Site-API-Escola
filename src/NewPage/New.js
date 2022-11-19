const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const port = 5051
const app = express()

app.get('/',(req, res)=>{
    res.json('Working')
})

app.get('/nba', (req, res)=>{
    const url = 'https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal'
    axios.get(url)
        .then((response)=>{
            const html = response.data
            const $ = cheerio.load(html)
            const standings = []

            $('.main-page-block-heading',html).each(function(){
                const name = $(this).text()
                const articles = $(this).find('.main-page-block-contents').text()

                standings.push({
                    name,
                    articles
                })
            })
                
            console.log(standings)
            res.json(standings)
        }).catch((err)=> console.log(err))
    })


app.listen(port, console.log(`Server is listening on port ${port}`))