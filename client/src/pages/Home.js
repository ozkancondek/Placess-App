import React from "react";
import Slider from "../components/Slider";
import {
  BackgroundContainer1,
  CardContainer,
  GridContainer,
  TextContainer1,
  TextContainer2,
} from "../styles/ComponentsStyles";

export const Home = () => {
  const url1 =
    "https://cdn.create.vista.com/api/media/medium/194844054/stock-photo-travel?token=";
  const url2 =
    "https://cdn.create.vista.com/api/media/medium/8149688/stock-photo-young-woman-sitting-on-a?token=";
  return (
    <div>
      <BackgroundContainer1 img={url1}>
        <TextContainer1>
          <p>Find</p>
          <p>somewhere</p>
          <p>to go</p>
        </TextContainer1>
      </BackgroundContainer1>
      <TextContainer2>
        <p> “A journey of a thousand miles begins with a single step”</p>
        <p>Lao Tzu</p>
      </TextContainer2>
      <GridContainer>
        <CardContainer>
          <img
            src="https://cdn.create.vista.com/api/media/medium/162339310/stock-photo-man-with-guitar-hitchhiking-alone?token="
            alt="banner11"
          />
          <p>Explore</p>
        </CardContainer>
        <CardContainer>
          <img
            src="https://cdn.create.vista.com/api/media/medium/36494133/stock-photo-girl-on-the-boat?token="
            alt="banner14"
          />
          <p>See</p>
        </CardContainer>
        <CardContainer>
          <img
            src="https://cdn.create.vista.com/api/media/medium/206765154/stock-photo-young-men-standing-car-broken?token="
            alt="banner22"
          />
          <p>Drive</p>
        </CardContainer>
      </GridContainer>
      <BackgroundContainer1 img={url2}></BackgroundContainer1>
      <TextContainer2>
        <p>
          “Choose the one that suits you among hundreds of places and create
          your own route by reading the comments.”
        </p>
      </TextContainer2>
      <GridContainer>
        <CardContainer>
          <img
            src="https://cdn.create.vista.com/api/media/medium/6771888/stock-photo-sunset-in-hands?token="
            alt="banner27"
          />
          <p>Inspire</p>
        </CardContainer>
        <CardContainer>
          <img
            src="https://cdn.create.vista.com/api/media/medium/152378376/stock-photo-ready-to-summer-vacation?token="
            alt="banner16"
          />
          <p>Care</p>
        </CardContainer>
        <CardContainer>
          <img
            src="https://cdn.create.vista.com/api/media/medium/25291005/stock-photo-wooden-bridge?token="
            alt="banner21"
          />
          <p>Nature</p>
        </CardContainer>
      </GridContainer>
      <Slider />
      <TextContainer2>
        <p> “A journey of a thousand miles begins with a single step”</p>
      </TextContainer2>
    </div>
  );
};
