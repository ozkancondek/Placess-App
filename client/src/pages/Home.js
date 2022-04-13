import React from "react";
import Slider from "../components/Slider";
import {
  BackgroundContainer1,
  CardContainer,
  CardImage,
  GridContainer,
  TextContainer1,
  TextContainer2,
} from "../styles/ComponentsStyles";
import { urls } from "../assets/url";

export const Home = () => {
  return (
    <div>
      <BackgroundContainer1 img={urls.url1}>
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
          <CardImage img={urls.url3} />
          <p>Explore</p>
        </CardContainer>
        <CardContainer>
          <CardImage img={urls.url4} />
          <p>See</p>
        </CardContainer>
        <CardContainer>
          <CardImage img={urls.url5} />
          <p>Drive</p>
        </CardContainer>
      </GridContainer>
      <BackgroundContainer1 img={urls.url2}></BackgroundContainer1>
      <TextContainer2>
        <p>
          “Choose the one that suits you among hundreds of places and create
          your own route by reading the comments.”
        </p>
      </TextContainer2>
      <GridContainer>
        <CardContainer>
          <CardImage img={urls.url6} />
          <p>Inspire</p>
        </CardContainer>
        <CardContainer>
          <CardImage img={urls.url7} />
          <p>Care</p>
        </CardContainer>
        <CardContainer>
          <CardImage img={urls.url8} />
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
