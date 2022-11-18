const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const port = 5051
const app = express()

app.get('/',(req, res)=>{
    res.json('Working')
})

app.get('/f1', (req, res)=>{
    const url = 'https://www.formula1.com/en/results.html/2022/drivers.html'
    axios.get(url)
        .then((response)=>{
            const html = response.data
            const $ = cheerio.load(html)
            const standings = []

            $('tr',html).each(function(){
                const posicao = $(this[10]).find('.dark').text()
                const nome = $(this).find('.hide-for-tablet').text()
                const sobrenome = $(this).find('.hide-for-mobile').text()
                const pontuacao = $(this).find('.dark bold').text()
                standings.push({
                    posicao,
                    nome,
                    sobrenome,
                    pontuacao
                })
            })
            console.log(standings)
            res.json(standings)
        }).catch((err)=> console.log(err))
})

app.listen(port, console.log(`Server is listening on port ${port}`))