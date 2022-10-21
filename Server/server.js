const express = require('express')
//book-api.js => https://stackabuse.com/building-a-rest-api-with-node-and-express/
const bodyParser = require('body-parser')
const cors = require('cors')
const Datastore = require('nedb')

const app = express()

app.use((req,res,next)=> {
    res.header("Access-Control-Allow-Origin",'*'),
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    req.header("Access-Control-Allow-Headers","Origin , X-Requested-With , Content-Type, Accept"),
    next()
})

///database
const database = new Datastore('database.db');
database.loadDatabase()

//endPointGet
app.get('/clients' , (req,res)=>{
    database.find({},(err,data)=>{
        {err && res.end()}
        res.json(data);
    })
})

///endPointPost
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/clients', (req, res) => {
    const data = req.body;
    database.insert(data);
    res.redirect('back')
    // another page => return res.redirect('/UserHomePage');
})



////////////////////
const server_port = 5000
app.listen(server_port, ()=> console.log(`Server started on port: ${server_port}`))