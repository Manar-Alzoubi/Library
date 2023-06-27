const express = require("express");

const router = express.Router();
const Book = require("../models/bookModel");

router.post("/create", async (req, res) => {
  const { title, author, content, image, price } = req.body;

  const newBook = new Book({
    title,
    author,
    content,
    image,
    price,
  });
  console.log("book recived", newBook);

  try {
    book = await newBook.save();
    res.send(book);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

router.get("/books", async (req, res) => {
  const books = await Book.find().then((foundBooks) => res.json(foundBooks));
});


router.patch("/:id", async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).send("Book not found...");

  
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        author : "Manar"
      },
      {
        new: true,
      }
    );
  
    res.send(updatedBook);
  });




router.delete("/delete/:id", async(req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.send(deletedBook);
  } catch (error) {
    res.status(500).send(error.message);
  }
});






module.exports = router;