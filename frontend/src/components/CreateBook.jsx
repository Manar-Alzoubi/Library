import React from "react";
import axios from 'axios';
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateBook() {
  const [input, setInput] = useState({
    title: "",
    content: "",
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
      title:input.title,
      content:input.content
    }
    axios.post("http://localhost:3001/create",newBook)
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
          <Form.Label>Book content</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="content"
            value={input.content}
            autoComplete="off"
            placeholder="Book content here"
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
