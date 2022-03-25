import { Card } from "./Card";
import PropTypes from "prop-types";

import { Button, Container, Row } from "react-bootstrap";

import { useEffect, useState } from "react";

import {
  AddNewPlaceButton,
  ImageContainer,
  TextContainer,
  TextPhotoContainer,
} from "../styles/ComponentsStyles";
import { useOut } from "../providers/MainProvider";
import { useApi } from "../providers/ApiProvider";
import { useSearch } from "../providers/SearchProvider";
import { AddNewPlace } from "./AddNewPlaace";

export const Cards = () => {
  const url3 =
    "https://cdn.create.vista.com/api/media/medium/211309022/stock-photo-photography?token=";
  const { isAuthenticated } = useOut();
  const [showAddCity, setShowAddCity] = useState(false);
  const { favList, pageNum } = useOut();
  const { getAllCities } = useApi();

  const { val } = useSearch();

  const [pagedPlaces, setPagedPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const getWithPageNum = async () => {
      try {
        let res = await getAllCities(pageNum);

        setPagedPlaces(res.sliced);
      } catch (error) {
        console.log(error);
      }
    };
    const getAll = async () => {
      try {
        let res = await getAllCities();

        setPlaces(res.cityList);
      } catch (error) {
        console.log(error);
      }
    };
    getWithPageNum();
    getAll();
  }, [getAllCities, pageNum]);

  var filteredData = [];
  //if the user search, filter cities from all cities
  if (val) {
    filteredData = places
      .filter((card) => card.title.toLowerCase().includes(val.toLowerCase()))
      .map((card, index) => {
        return (
          <Card
            isFavorite={favList.includes(card.id)}
            card={card}
            key={index}
            id={card._id}
          />
        );
      });
  } else {
    //otherwise just show cities with page number
    filteredData = pagedPlaces.map((card, index) => {
      return (
        <Card
          isFavorite={favList.includes(card.id)}
          card={card}
          key={index}
          id={card._id}
        />
      );
    });
  }
  const toggleAddCityCard = () => {
    showAddCity ? setShowAddCity(false) : setShowAddCity(true);
  };
  return (
    <div>
      <TextPhotoContainer>
        <ImageContainer img={url3}></ImageContainer>
        <TextContainer>
          <p>
            There are many places in the world that need to be explored. With
            Blueberry you can discover the most interesting places you have
            never seen before and make your own roadmap.
          </p>
        </TextContainer>
      </TextPhotoContainer>

      <AddNewPlaceButton AddNewPlaceButton>
        {isAuthenticated && (
          <Button variant="secondary" onClick={() => toggleAddCityCard()}>
            Add New Place
          </Button>
        )}
      </AddNewPlaceButton>
      <div>
        {showAddCity && <AddNewPlace setShowAddCity={setShowAddCity} />}
      </div>

      <Container className="text-center mt-4 height:500px">
        <Row className="d-flex justify-content-center">{filteredData}</Row>
      </Container>
    </div>
  );
};
Cards.propTypes = {
  favList: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  val: PropTypes.string.isRequired,
};
