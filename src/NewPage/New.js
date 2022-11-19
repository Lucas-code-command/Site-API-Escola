const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const port = 5051
const app = express()

app.use((req,res,next)=> {
    res.header("Access-Control-Allow-Origin",'*'),
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    req.header("Access-Control-Allow-Headers","Origin , X-Requested-With , Content-Type, Accept"),
    next()
})

app.get('/',(req, res)=>{
    res.json('Working')
})

app.get('/nba/times', (req, res)=>{
    const url = 'https://www.espn.com.br/nba/classificacao'
    axios.get(url)
        .then((response)=>{
            const html = response.data
            const $ = cheerio.load(html)
            const standings = []
            $('.hide-mobile',html).each(function(){
                const name = $(this).text().trim()
                standings.push({
                    name
                })
            })
            //console.log(standings)
            res.json(standings)
        }).catch((err)=> console.log(err))
    })

app.get('/nba/pontos', (req,res)=>{
    const url = 'https://www.espn.com.br/nba/classificacao'
    axios.get(url)
        .then((response)=> {
            const html = response.data
            const $ = cheerio.load(html)
            const points = []
            $('.stat-cell',html).each(function(){
                const point = $(this).text()
                points.push({
                    point
                })
            })
            //console.log(points)
            res.json(points)
        }).catch((err)=> console.log(err))
})


app.listen(port, console.log(`Server is listening on port ${port}`))