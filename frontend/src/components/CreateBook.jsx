import React from "react";
import axios from 'axios';
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateBook() {
  const [input, setInput] = useState({
    title: "",
    author:'',
    content: "",
    image:'',
      price:''
   

  });
  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

    const newBook = {
      title:input.title || "No Title",
      author:input.author || "No Author",
      content:input.content || "No Description",
      image:input.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Bhv9K6DJZZkBX2C3s16vO0X6580sWCrxVQ&usqp=CAU",
      price:input.price || "10"
    }
    console.log(newBook);
    axios.post("http://localhost:3001/create",newBook);
  }

  return (
    <div className="container">
      <h1> Add Book Page </h1>
   

      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="title"
            value={input.title}
            autoComplete="off"
            placeholder="Book title here"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Author</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="author"
            value={input.author}
            autoComplete="off"
            placeholder="Book author here"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Book description</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="content"
            value={input.content}
            autoComplete="off"
            placeholder="Book content here"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Book Image</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="image"
            value={input.image}
            autoComplete="off"
            placeholder="Book image here"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="price"
            value={input.price}
            autoComplete="off"
            placeholder="Book price here"
          />
        </Form.Group>

        <Button onClick={handleClick} variant="primary" type="submit">
          Add Book
        </Button>
      </Form>
    </div>
  );
}

export default CreateBook;
