import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Pages.css";
import { useState } from "react";
import RangePicker from "../components/RangePicker";
import { Alert, Typography } from "@mui/material";
import { useApi } from "../providers/ApiProvider";

export const Contact = () => {
  const navigate = useNavigate();
  const { addNewRate } = useApi();
  //get email from local storege. It setted in Login
  const email = localStorage.getItem("email");
  //DB answer when i submit form
  const [dbAnswer, setDbAnswer] = useState("");
  //questions in survey
  const questions = [
    "Overall Satisfaction: How satisfied are you overall with our website?",
    "Usability: How easy was it for you to find the information you were looking for?",
    "Content Quality: How do you rate the quality and relevance of information provided on our website?",
    "Website Design and Technical Features: How do you evaluate the technical aspects of the website?",
    "Functionality: How satisfied are you with the features of our website?",
    "Personalization: To what extent did you feel that the content and recommendations on the website were tailored to your needs?",
  ];
  // Array for assigning answers. Initialize answers with default value 3
  const [answers, setAnswers] = useState(Array(questions.length).fill(4));
  //Message
  const [textareaValue, setTextareaValue] = useState(""); // State to store textarea value
  // Function to handle textarea value change
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  //update answers and assign to array
  const handleAnswerChange = (index, newValue) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = newValue;
      return updatedAnswers;
    });
  };
  // Function to handle submitting the form. Post rate
  const handleSubmit = (e) => {
    const postRate = async () => {
      let rateData = {
        answers: answers,
        email: email,
        message: textareaValue,
      };
      try {
        let res = await addNewRate(rateData);
        setTimeout(() => {
          navigate("/cities");
        }, 2000);

        setDbAnswer(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    postRate();
    setTextareaValue("");
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="c-form">
        <Typography
          variant="h6"
          gutterBottom
          style={{
            paddingTop: "5px",
            fontSize: "1.5rem",
            color: " #cccccc",
          }}
        >
          We are glad to hear your feedback
        </Typography>

        <br />
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            defaultValue={email}
            readOnly={email ? true : false}
          />
        </FloatingLabel>
        <br />
        <div>
          {questions.map((question, index) => (
            <RangePicker
              key={index}
              question={question}
              value={answers[index]} // Pass value for each question
              onChange={(newValue) => handleAnswerChange(index, newValue)}
            />
          ))}
        </div>
        <br />
        <Typography variant="h6" gutterBottom style={{ color: "white" }}>
          Do you have any additional or suggestions on how we can improve our
          website? Please share your thoughts here.
        </Typography>
        <br />
        <FloatingLabel controlId="floatingTextarea2" label="Message">
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            onChange={handleTextareaChange}
          />
        </FloatingLabel>
        <br />
        {dbAnswer && (
          <Alert
            style={{ marginBottom: "10px" }}
            severity="success"
          >{`Thank you!! Your rate reached us successfully.`}</Alert>
        )}
        <Button variant="secondary" onClick={handleSubmit}>
          SEND
        </Button>
      </div>
    </div>
  );
};
