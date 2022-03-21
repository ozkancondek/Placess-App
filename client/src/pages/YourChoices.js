import React, { useEffect, useState } from "react";
import "../styles/Card.css";

import { useOut } from "../providers/MainProvider";

import { ChooseCity } from "../components/ChooseCity";
import { useApi } from "../providers/ApiProvider";
import { Card } from "../components/Card";

export const YourChoices = () => {
  const [data, setdata] = useState([]);
  const { getAllCities } = useApi();
  const { favList } = useOut();
  useEffect(() => {
    const fetch = async () => {
      try {
        let res = await getAllCities();

        setdata(res.cityList);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const favCities = data
    .filter((card) => favList.includes(card._id))
    .map((card) => {
      return (
        <Card
          isFavorite={favList.includes(card._id)}
          card={card}
          key={data._id}
          id={card._id}
        />
      );
    });

  if (favList.length !== 0) {
    return (
      <div style={{ minHeight: "90vh" }}>
        <div className="card-container">{favCities}</div>
      </div>
    );
  } else {
    return <ChooseCity />;
  }
};
