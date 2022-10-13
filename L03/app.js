const express = require('express')
const dotenv = require('dotenv')
const router = require('./router')
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

const urlEncoded = bodyParser.urlencoded({extended:false})
const jsonParse = bodyParser.json() 
const env = dotenv.config()

const app = express()

app.use(router)
app.use(urlEncoded)
app.use(jsonParse)
app.use(express.static('public'))
app.set('view engine', 'ejs') // Setting EJS as template engine
app.set('views', __dirname + '/views') // Setting the directory for the view files

mongoURI = process.env.MONGOURI

const conn = async () => {mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    console.log("MongoDB connected")
).catch((e)=>{
    console.log(e)
})
}

conn()

app.listen(process.env.PORT, ()=>{
    console.log('Server started at Port ' + process.env.PORT)
})
