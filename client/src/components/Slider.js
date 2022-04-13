import React from "react";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useApi } from "../providers/ApiProvider";
import { getRandomCityForSlider } from "../services/getRandomPlaceForSlider";
import { SliderButtonContainer } from "../styles/ComponentsStyles";

const Slider = () => {
  const navigate = useNavigate();
  const { getAllCities } = useApi();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        let res = await getAllCities();

        setPlaces(res.cityList);
      } catch (error) {
        console.log(error);
      }
    };

    getAll();
  }, [getAllCities]);

  //take random 6 cities from data
  const randomCityIdArray = getRandomCityForSlider(6, places);

  //function for every corousel item
  const slide = (city, index) => {
    return (
      <Carousel.Item interval={5000} key={index}>
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
    <div style={{ textAlign: "center", width: "90%", margin: "auto" }}>
      {!!randomCityIdArray.filter(Boolean).length ? (
        <Carousel fade>
          {randomCityIdArray?.map((c, index) => slide(c, index))}
        </Carousel>
      ) : (
        <CircularProgress />
      )}
      <SliderButtonContainer>
        <Button onClick={() => navigate("/cities")} variant="outline-secondary">
          Discover More
        </Button>
      </SliderButtonContainer>
    </div>
  );
};

export default Slider;
