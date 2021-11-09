import React from "react";
import bio from "../../../images/Profile/Bio.jpeg";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  AboutCol1,
  AboutCol2,
  AboutImgWrapper,
  AboutName,
  AboutPara,
} from "./AboutElement";
import "./About.css";

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutRow>
            <AboutCol1>
              <AboutImgWrapper>
                <img src={bio} alt="avatar" className="aboutimg" />
              </AboutImgWrapper>
            </AboutCol1>
            <AboutCol2>
              <AboutName>Thomas Nguyen</AboutName>
              <AboutPara>
                Nguyen Viet Hoang "Thomas" Nam (born May 24, 2001) is a
                Vietnamese musician, best known as the Co-founder of
                <span className="bandName">LéEntertainment</span>
                while also being a bass player responsible for both live
                performances and recording sessions.
              </AboutPara>
              <AboutPara>
                Music has always been a important part in my life since the
                early days, it helps me express my emotions and become one of
                the main inspirations for me to get up everyday and improve
                myself. Beside that, it also a reason why i learn to play a
                musical instrument and that made me discover some of the
                abilities that i never thought i would have had.
              </AboutPara>
              <AboutPara>
                After years of working and learning from some of the blessed
                people of the current music scene that i am now able to share my
                music journey that will hopefully inspire other people to get up
                and follow their passion.
              </AboutPara>
            </AboutCol2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
