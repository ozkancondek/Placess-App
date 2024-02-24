import { useEffect, useState } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import {
  AddNewPlaceButton,
  ImageContainer,
  TextContainer,
  TextPhotoContainer,
} from "../styles/ComponentsStyles";
import { useOut } from "../providers/MainProvider";
import { Card } from "./Card";
import { useApi } from "../providers/ApiProvider";
import { useSearch } from "../providers/SearchProvider";
import { AddNewPlace } from "./AddNewPlace";
import { urls } from "../assets/url";

export const Cards = () => {
  const { isAuthenticated } = useOut();
  const { favList, pageNum } = useOut();
  const { getAllCities } = useApi();
  const { val } = useSearch();
  const [showAddCity, setShowAddCity] = useState(false);
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
            isFavorite={favList.includes(card._id)}
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
          isFavorite={favList.includes(card._id)}
          card={card}
          key={index}
          id={card._id}
        />
      );
    });
  }
  //add new city button
  const toggleAddCityCard = () => {
    showAddCity ? setShowAddCity(false) : setShowAddCity(true);
  };
  return (
    <div>
      <TextPhotoContainer>
        <ImageContainer img={urls.url9}></ImageContainer>
        <TextContainer>
          <p>
            There are many places in the world that need to be explored. With
            Blueberry you can discover the most interesting places you have
            never seen before and make your own travel plan.
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
        <Row className="d-flex justify-content-center">
          {filteredData.length === 0 ? (
            <Spinner animation="border" />
          ) : (
            filteredData
          )}
        </Row>
      </Container>
    </div>
  );
};
