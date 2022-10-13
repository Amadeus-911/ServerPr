const mongoose = require('mongoose')

const booksSchema = mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    }
})
const Book = new mongoose.model("Book", booksSchema )

module.exports =  Book