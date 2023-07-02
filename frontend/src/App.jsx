import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Container} from '@mui/material';
import NavBar from "./components/navBar/NavBar";
import Home from "./components/Home";
import Books from "./components/books/Books";
import CreateBook from "./components/books/CreateBook";
import signIn from "./components/auth/signin";
import signUp from "./components/auth/signup";


function App() {
  return (
    <Router>
      <Container maxWidth="xl">
      <NavBar />
      <Routes>
        <Route path="/signin" Component={signIn}/>
        <Route path="/signup" Component={signUp}/>
        <Route path="/" exact element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/create" element={<CreateBook />} />
           </Routes>
           </Container>
    </Router>
  );
}

export default App;
