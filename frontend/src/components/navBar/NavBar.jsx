import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import signIn from "../auth/signin";
import signUp from "../auth/signup";

function NavBar() {
  // const classes = useStyles();
  const navigateTo = useNavigate();
const handleSignOut =() =>{
  // navigateTo('/api/signin')
  navigateTo('/')
}

const handleSignIn =() =>{
  // navigateTo('/api/signin')
  navigateTo('/')
}

const handleSignUp =() =>{
  // navigateTo('/api/signin')
  navigateTo('/')
}

  return (
    <>
         <Navbar bg="dark" variant="dark">
 
        <Navbar.Brand>Books Library </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/books">Books</Nav.Link>
          <Nav.Link href="/create">Create Book</Nav.Link>
        </Nav>
        <Button onClick={handleSignOut}>Sign Out</Button>
        <Button >Sign In</Button>
        <Button >Sign Up</Button>
      </Navbar>
    </>
  );
}

export default NavBar;
