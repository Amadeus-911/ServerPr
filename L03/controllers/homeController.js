const Book = require('../schemas/books')

const getHome = (req,res) => {
    res.render('home')
}

const addBooks = (req, res)=>{

    res.render('addBooks')
}

const books = (req, res) =>{
    let data
    Book.find((err, docs) => {
        if (!err) {
            res.render("books", {
                data: docs
            });
        } else {
            console.log('Failed to retrieve : ' + err);
        }
    });
    res.render('books', data)
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