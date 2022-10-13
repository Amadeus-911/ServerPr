const Book = require('../schemas/books')

const getHome = (req,res) => {
    res.render('home')
}

const addBooks = (req, res)=>{

    res.render('addBooks')
}

const books = (req, res) =>{
    var data
    const query = Book.find()
    query.select("name author genre")
    query.exec((err, booklist)=>{
        if(err) console.log("ERRRRROOORRR: " + err)
        else{
            res.render('books', {data: booklist})
        }
    })
    
}


const addNewBook = (req, res)=>{
    console.log(req.body)
    let book = new Book({
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre
    })
    book.save((err,result) => {
        if (err){
            console.log(err);
        }
        else{
            console.log(result)
        }
    })
    res.redirect('/books')
}

module.exports = {getHome, addBooks, books, addNewBook}