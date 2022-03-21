import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useOut } from "../providers/MainProvider";

const Slider = () => {
  const navigate = useNavigate();
  //get data from api
  const { data } = useOut();
  let randomCityIdArray = [];
  for (let i = 0; i <= 5; i++) {
    randomCityIdArray.push(Math.floor(Math.random() * (data.length + 1)));
  }

  const slide = (city) => {
    return (
      <Carousel.Item interval={8000} key={city.id}>
        <img
          style={{ height: "95vh" }}
          className="d-block w-100"
          src={city.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{city.title}</h3>
          <p>{city.desc}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Carousel fade>
        {data.filter((city) => randomCityIdArray.includes(city.id)).map(slide)}
      </Carousel>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button onClick={() => navigate("/cities")} variant="outline-secondary">
          Discover More
        </Button>
      </div>
    </div>
  );
};

export default Slider;
