import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

import { Table } from "react-bootstrap";

function Books() {
  const [books, setBooks] = useState([
    {
      title: "",
      content: "",
    }
  ]);


  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then(({ data }) => {
        console.log("data   " , data)
        setBooks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return books.map((res, i) => {
      return <res obj={res} key={i} />;
    });
  };
  
  return (
    <div  >
      {books.map(book  => 
      <div >
      <h1>{book.title}</h1>
      <h2>{book.content}</h2>
      <p>********************</p>
        </div>  
    )}
    </div>
  );





};


export default Books;
