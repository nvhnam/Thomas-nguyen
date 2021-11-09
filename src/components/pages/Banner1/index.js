import React from "react";
import {
  Banner1Container,
  Banner1Img,
  Banner1Overlay,
  BannerText,
} from "./Banner1Element";
import "./Banner1.css";

const Banner1 = () => {
  return (
    <>
      <Banner1Container >
        <Banner1Img className="banner1">
          <Banner1Overlay></Banner1Overlay>
          <BannerText>PROJECTS</BannerText>
        </Banner1Img>
      </Banner1Container>
    </>
  );
};

export default Banner1;
