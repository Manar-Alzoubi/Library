import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row , Col} from "react-bootstrap";
import './Books.css';
function Books() {
  const [books, setBooks] = useState([
    {
      title: "",
      author:"",
      content: "",
      image:"",
      price:""
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

  // const DataTable = () => {
  //   return books.map((res, i) => {
  //     return <res obj={res} key={i} />;
  //   });
  // };
function handleBuyBtnClick(event){
  const {title} = event.target;
  alert("you bought :  " +title );
}

function handleUpdateBtnClick(event){
  const {id} = event.target ;
  console.log("update "+id)
}


function handleDeleteBtnClick(event){
  const {id} = event.target;
  console.log("Delete " + id)
}


  return (
    <div>
        <Row md={4}>
      {books.map((book) => (
         <Col  md={3}>
        <div className="div-container">
        <Card  className='div-card' style={{ width: "18rem" }} >
          <Card.Img className='div-card-img' variant="top" src={book.image} />
          <Card.Body>
            <Card.Title className='div-card-title'>{book.title}</Card.Title>
            <Card.Text className='div-card-title'>Author: {book.author}</Card.Text>
            <Card.Text className='div-card-title'>Description: {book.content}</Card.Text>
            <Card.Text className='div-card-title' style={{ color:"red" }}>Price: {book.price} JOD</Card.Text>
            <Button title={book.title} onClick={handleBuyBtnClick} className='div-card-button' variant="primary">Buy</Button>
            <Button id={book._id} onClick={handleUpdateBtnClick} className='div-card-button' variant="primary">Update</Button>
            <Button id={book._id} onClick={handleDeleteBtnClick} className='div-card-button' variant="primary">Delete</Button>
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
