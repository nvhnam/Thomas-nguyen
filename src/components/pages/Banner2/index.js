import React from "react";
import "./Banner2.css";
import {
  Banner2Container,
  Banner2Tag,
  Banner2Img,
  Banner2Overlay,
} from "./Banner2Element";

const Banner2 = () => {
  return (
    <>
      <Banner2Container>
        <Banner2Tag>RECORDING</Banner2Tag>
        <Banner2Img className="banner2Img">
          <Banner2Overlay></Banner2Overlay>
        </Banner2Img>
      </Banner2Container>
    </>
  );
};

export default Banner2;
