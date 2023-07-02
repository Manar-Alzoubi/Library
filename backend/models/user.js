const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "pleasee provide your name"],
    minlength: 3,
    maxlength: 15,
  },
  email: {
    type: String,
    required: [true, " please provide your email"],
    minlength: 8,
    maxlength: 80,
    unique: true,
  },
  password: {
   type: String,
    required: [true, " please provide your email"],
    minlength: 5,
    maxlength: 200,
  },
});

const User = mongoose.model("User", userSchema);

// const testBook = new Book({title:"new book" ,author:"me" ,content:"bad book", image:"gggggggggg" , price:"25"});
// testBook.save().then(doc =>{console.log(doc)}).catch(err =>{console.log(err)});
// console.log("saved");

// Book.findByIdAndRemove("64997fc0f304d0739063cb2c").then(doc =>{console.log("deleted  "+doc)}).catch(err =>{console.log(err)});
module.exports = User;
