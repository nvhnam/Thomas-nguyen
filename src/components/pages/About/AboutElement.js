import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  height: 650px;
  width: 100%;
  margin-top: 2.5rem;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    height: auto;
  }

  @media screen and (max-width: 940px) {
    height: auto;
  }

  @media screen and (max-width: 767px) {
    height: 650px;
    margin-top: 6rem;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 1rem 1.5rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 940px) {
    padding: 0.5rem 0.7rem;
    margin-bottom: 6rem;
  }

  @media screen and (max-width: 767px) {
    padding: 1rem 1.5rem;
    margin-bottom: 0;
  }
`;

export const AboutRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const AboutCol1 = styled.div`
  width: 60%;
  padding-left: 3rem;
  margin-top: 7rem;

  @media screen and (max-width: 940px) {
    margin-top: -3rem;
    padding-left: 2rem;
  }

  @media screen and (max-width: 767px) {
    padding: 0 0.7rem;
    margin-top: 20rem;
  }
`;

export const AboutImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-self: flex-start;
`;

export const AboutCol2 = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 6.4rem;
  margin-top: 3rem;

  @media screen and (max-width: 940px) {
    padding: 0 3rem;
  }

  @media screen and (max-width: 767px) {
    padding: 0 2rem;
    margin-right: 0;
  }

  @media screen and (max-width: 320px) {
    padding: 0 1.3rem;
    margin-right: 0;
  }
`;

export const AboutName = styled.h1`
  font-size: 42px;
  font-weight: 500;
  color: #010606;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 940px) {
    font-size: 2.3rem;
    margin-bottom: 1.1rem;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 1.5rem;
    font-size: 30px;
  }

  @media screen and (max-width: 320px) {
    margin-bottom: 1rem;
    font-size: 24px;
  }
`;

export const AboutPara = styled.p`
  font-size: 20px;
  color: #010606;
  margin-bottom: 1rem;

  @media screen and (max-width: 940px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }

  @media screen and (max-width: 320px) {
    font-size: 13px;
  }
`;
