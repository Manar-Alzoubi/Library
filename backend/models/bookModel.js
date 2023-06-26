const mongoose =require('mongoose');

const booksDchema ={
    title:String,
    content : String
}

const Book =mongoose.model('Book' ,booksDchema );

// const testBook = new Book({title:"new book" , content:"bad book"});
// testBook.save().then(doc =>{console.log(doc)}).catch(err =>{console.log(err)});
// console.log("saved");
module.exports = Book;