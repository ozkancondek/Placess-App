import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Alert from "@mui/material/Alert";
import { useApi } from "../providers/ApiProvider";
import { AddCityComponentContainer } from "../styles/ComponentsStyles";

export const AddNewPlace = ({ setShowAddCity }) => {
  const [message, setMessage] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [description, setDesc] = useState("");
  const { addNewPlace } = useApi();

  const handleSubmit = (e) => {
    //add new city to database
    const postCity = async () => {
      let city = {
        description: description,
        image: imgUrl,
        title: placeName,
      };

      try {
        let res = await addNewPlace(city);
        setTimeout(() => {
          window.location.reload();
        }, 3000);

        setMessage(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    postCity();
    setTimeout(() => setShowAddCity(false), 3000);
    e.preventDefault();
  };
  return (
    <AddCityComponentContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image URL"
            onChange={(e) => {
              setImgUrl(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Place Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Place name"
            onChange={(e) => {
              setPlaceName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Some Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add description"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Submit
        </Button>
        {message && (
          <Alert severity="success">{`${message} Page will reload`}</Alert>
        )}
      </Form>
    </AddCityComponentContainer>
  );
};
