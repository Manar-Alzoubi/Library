const express = require("express");
const auth = require("../middleware/auth");
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

router.get("/books",  async (req, res) => {
  const books = await Book.find().then((foundBooks) => res.json(foundBooks));
});

router.patch("/update/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).send("Book not found...");

    const { title, author, content, image, price } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        title,
        author,
        content,
        image,
        price,
      },
      {
        new: true,
      }
    );

    res.send(updatedBook);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.send(deletedBook);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;