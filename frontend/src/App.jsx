import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Books from "./components/Books";
import CreateBook from "./components/CreateBook";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/create" element={<CreateBook />} />
      </Routes>
    </Router>
  );
}

export default App;
