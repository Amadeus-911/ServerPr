const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended:false})
const homeController = require("./controllers/homeController")

console.log(homeController)
router.get('/home', homeController.getHome)
router.get('/addBooks', homeController.addBooks)
router.get('/books', homeController.books)
router.post('/addnew', urlEncoded, homeController.addNewBook)


module.exports = router