import styled from "styled-components";

export const Banner1Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-width: 80%;
  height: 11vmax;
  margin-top: 9rem;
  left: 0;
  right: 0;
  /* top: 0; */
  top: 50px;
  position: sticky;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -o-sticky;
  position: -ms-sticky;
  z-index: 2;

  @media screen and (max-width: 940px) {
    top: 72px;
  }

  @media screen and (max-width: 767px) {
    height: 10vmax;
    margin-top: 34rem;
    top: 70px;
  }

  @media screen and (max-width: 320px) {
    margin-top: 20rem;
  }
`;

export const Banner1Img = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Banner1Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const BannerText = styled.h1`
  background-color: rgba(0, 0, 0, 0.45);
  color: white;
  height: 100%;
  font-size: 2.8rem;
  font-weight: 300;
  padding-top: 4.1vmax;
  letter-spacing: 0.6rem;
  font-family: var(--Rubik);
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
    letter-spacing: 0.8rem;
    padding-top: 2.8vmax;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.4rem;
    letter-spacing: 0.6rem;
  }
`;
