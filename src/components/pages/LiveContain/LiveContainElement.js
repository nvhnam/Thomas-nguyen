import styled from "styled-components";

export const LiveContainer = styled.div`
  position: relative;
  width: 100%;
  height: 570px;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);

  @media screen and (max-width: 1024px) {
    height: 60vmax;
  }

  @media screen and (max-width: 940px) {
    height: 75vmax;
  }

  @media screen and (max-width: 767px) {
    height: 81.5vmax;
  }
`;

export const LiveBanner = styled.div`
  /* position: sticky; */
  display: block;
  top: 0;
  left: 0;
  font-size: 2vmax;
  background-color: white;
  color: #010606;
  text-align: center;
  width: 16vmax;
  height: 2.8vmax;
  border-radius: 4px;
  border: 1.3px solid black;
  z-index: 1;

  @media screen and (max-width: 767px) {
    height: 3.5vmax;
    width: 18vmax;
    font-size: 2.3vmax;
  }
`;
