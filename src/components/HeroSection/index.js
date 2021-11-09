import React from "react";
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Col1,
  BtnWrapper,
  Col2,
  Heading,
  Text,
  ImgWrapper,
} from "./HeroSectionElement";
import cover from "../../images/Profile/Cover.jpeg";
import "./HeroSection.css";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <HeroRow>
            <Col1 className="column1">
              <Heading>Welcome</Heading>
              <Text>
                This is Thomas personal page for sharing his passion for music
                and updating some infomation to have a closer look on his
                journey
              </Text>
              <BtnWrapper>
                <Button
                  big="true"
                  bright="false"
                  fontBig="true"
                  withBorder="true"
                  primary="false"
                  to="live"
                  smooth={true}
                  duration={900}
                  spy={true}
                  exact="true"
                  offset={-190}
                >
                  Let's Go
                </Button>
              </BtnWrapper>
            </Col1>
            <Col2>
              <ImgWrapper>
                <img src={cover} alt="cover" className="cover" />
              </ImgWrapper>
            </Col2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
