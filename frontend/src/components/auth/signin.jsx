import React from 'react';

import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const signIn = () => {
    return ( 
        <>
        <h2> Sign in</h2>
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            // onChange={handleChange}
            type="text"
            // name="email"
            // value={input.email}
            autoComplete="off"
            placeholder="your email"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            // onChange={handleChange}
            type="text"
            // name="password"
            // value={input.password}
            autoComplete="off"
            placeholder="your password"
          />
        </Form.Group>
        {/* onClick={handleClick}  */}
        <Button  className="btn btn-primary" type="submit">
          Sign In
        </Button>
        </Form>
        </>
     );
}
 
export default signIn;