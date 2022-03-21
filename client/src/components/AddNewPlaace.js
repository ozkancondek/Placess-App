import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const AddNewPlace = ({ setShowAddCity }) => {
  const location = useLocation();
  const [imgUrl, setImgUrl] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [desc, setDesc] = useState("");

  //post a new city get from api

  /*   const handleSubmit = (e) => {
    const postCity = async () => {
      let city = {
        desc: desc,
        image: imgUrl,
        title: placeName,
      };

      try {
        let res = await axios.post(
          "http://localhost:4000/api/city/newplace",
          city
        );
        let data = res.data;
        location.reload();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    postCity();
    setTimeout(() => setShowAddCity(false), 3000);

    e.preventDefault();
  }; */
  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "10px",
      }}
    >
      {/*    onSubmit={handleSubmit} */}
      <Form>
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
      </Form>
    </div>
  );
};
