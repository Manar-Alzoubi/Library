const express =require('express');

const router = express.Router();
const Book = require('../models/bookModel');

//
router.route("/create").post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newBook = new Book({
        title,
        content
    });

    newBook.save();
});

router.route('/books').get((req,res) =>{
    Book.find().then(foundBooks => res.json(foundBooks));
   
})

module.exports= router;