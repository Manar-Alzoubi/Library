const express =require('express');

const router = express.Router();
const Book = require('../models/bookModel');

//
router.route("/create").post((req, res) => {
    console.log(req.body.title);
    const title = req.body.title;
    const author=req.body.author;
    const content = req.body.content;
    const image = req.body.image;
    const price = req.body.price;
    const newBook = new Book({
        title,
        author,
        content,
        image,
        price
    });
console.log("book recived" , newBook);
    newBook.save();
});

router.route('/books').get((req,res) =>{
    Book.find().then(foundBooks => res.json(foundBooks));
   
})

module.exports= router;