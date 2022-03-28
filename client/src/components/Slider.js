import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useApi } from "../providers/ApiProvider";

const Slider = () => {
  const navigate = useNavigate();
  const { getAllCities } = useApi();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        let res = await getAllCities();
        console.log(res);
        setPlaces(res.cityList);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, [getAllCities]);

  //take random 6 cities from data
  let randomCityIdArray = [];
  for (let i = 0; i <= 5; i++) {
    randomCityIdArray.push(
      places[Math.floor(Math.random() * (places.length + 1))]
    );
  }
  //function for every corousel item
  const slide = (city) => {
    return (
      <Carousel.Item interval={5000} key={city._id}>
        <img
          style={{ height: "95vh" }}
          className="d-block w-100"
          src={city.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{city.title}</h3>
          <p>{city.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  };
  return (
    <div style={{ textAlign: "center" }}>
      {/* <Carousel fade>{randomCityIdArray?.map((c) => slide(c))}</Carousel>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button onClick={() => navigate("/cities")} variant="outline-secondary">
          Discover More
        </Button>
      </div> */}
    </div>
  );
};

export default Slider;
