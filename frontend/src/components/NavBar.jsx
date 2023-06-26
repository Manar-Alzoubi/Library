import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Books Library </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/books">Books</Nav.Link>
          <Nav.Link href="/create">Create Book</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
