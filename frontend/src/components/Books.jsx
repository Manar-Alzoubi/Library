import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Books.css";

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
    const { id } = event.target;
    console.log("update " + id);
  }

  const handleDeleteBtnClick = async (event) => {
    // const { id } = event.target;
    // // console.log(id);
    // // axios.delete("http://localhost:3001/books",id);
    // axios
    //   .get("http://localhost:3001/books")
    //   .then(({ data }) => {
    //     // console.log(data);
    //     console.log(data);
    //     data.map((ele,index) => {
        
    //       if (ele._id === id) {
    //         console.log("titl   "+ data[index].title)
    //         data[index] = "";
            // console.log( data[index]._id)
            // data[index].title = "";
            // console.log( data[index].title)
            // data[index].author = "";
            // console.log( data[index].author_id)
            // data[index].content = "";
            // console.log( data[index].content)
            // data[index].image= "";
            // console.log( data[index].image)
            // data[index].price= "";
            // console.log( data[index].price)
            // console.log( data[index])
          //  setBooks(data);
          //  console.log(data);
          // }
         

        // });
        
       
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
      console.log('delete btn clicked')
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
