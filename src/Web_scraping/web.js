const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const PORT = 5050

const app = express()

app.use((req,res,next)=> {
    res.header("Access-Control-Allow-Origin",'*'),
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    req.header("Access-Control-Allow-Headers","Origin , X-Requested-With , Content-Type, Accept"),
    next()
})

app.get('/manual', (req,res)=> {
    res.json("Hello half correct")
})
   
app.get('/news', (req, res) => {
    const url = "https://www.theguardian.com/international"
    axios.get(url)
        .then((response) => {
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
            console.log(articles)
            res.json(articles)
        }).catch((err)=> console.log(err))
})


app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`))