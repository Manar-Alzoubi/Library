import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Col } from "react-bootstrap";
// import DeleteIcon from '@mui/icons-material/Delete';
import "./Books.css";
// import routes

function Books() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([
    {
      title: "",
      author: "",
      content: "",
      image: "",
      price: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then(({ data }) => {
        setBooks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleBuyBtnClick(event) {
    const { title } = event.target;
    alert("you bought :  " + title);
  }

  function handleUpdateBtnClick(event) {
    // const { id,title,author ,content,image, price} = event.target;
    // console.log("update " , id , title , author , content , image , price);

const {id, image , price,author ,content , title} =event.target;

let newBook="";

    books.map((book) =>{
      if(id === book._id){
        newBook = {
          title:"Ecadolly",
          author:"Hanan ",
          content:"novel",
          image :book.image,
          price :book.price,
        } 
      console.log(newBook);
      axios.patch(`http://localhost:3001/update/${id}`,newBook);
    }})
    navigate("/books")
  }

  const handleDeleteBtnClick = async (event) => {
    const { id } = event.target;
      console.log('delete btn clicked');
      books.map((book) =>{
        if(id === book._id)
        console.log(book.title)
        axios.delete(`http://localhost:3001/delete/${id}`,book);
      })
      navigate("/books")
      
  };

  return (
    <div>
      <Row md={4}>
        {books.map((book) => (
          <Col md={3}>
            <div className="div-container">
              <Card className="div-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="div-card-img"
                  variant="top"
                  src={book.image}
                />
                <Card.Body>
                  <Card.Title className="div-card-title">
                    {book.title}
                  </Card.Title>
                  <Card.Text className="div-card-title">
                    Author: {book.author}
                  </Card.Text>
                  <Card.Text className="div-card-title">
                    Description: {book.content}
                  </Card.Text>
                  <Card.Text
                    className="div-card-title"
                    style={{ color: "red" }}
                  >
                    Price: {book.price} JOD
                  </Card.Text>
                  <Button
                    title={book.title}
                    onClick={handleBuyBtnClick}
                    className="div-card-button"
                    variant="primary"
                  >
                    Buy
                  </Button>
                  <Button
                    id={book._id}
                    title={book.title}
                    author = {book.author}
                    content = {book.content}
                    price = {book.price}
                    image = {book.image}
                    onClick={handleUpdateBtnClick}
                    className="div-card-button"
                    variant="primary"
                  >
                    Update
                  </Button>
                  <Button
                    id={book._id}
                    title={book.title}
                
                    onClick={handleDeleteBtnClick}
                    className="div-card-button"
                    variant="primary"
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Books;
