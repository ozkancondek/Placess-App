import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import "../styles/Pages.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="c-form">
        <div className="cwu">Contact with us</div>
        <br />
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Message">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <br />
        <Button variant="secondary">SEND</Button>
      </div>
    </div>
  );
};
