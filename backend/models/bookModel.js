const mongoose =require('mongoose');

const booksDchema ={
    title:String,
    author:String,
    content : String,
    image:String,
    price:String
}

const Book =mongoose.model('Book' ,booksDchema );

// const testBook = new Book({title:"new book" ,author:"me" ,content:"bad book", image:"gggggggggg" , price:"25"});
// testBook.save().then(doc =>{console.log(doc)}).catch(err =>{console.log(err)});
// console.log("saved");
module.exports = Book;