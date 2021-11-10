import styled from "styled-components";

export const Banner2Container = styled.div`
  width: 100%;
  min-width: 80%;
  height: 15vmax;
  display: block;
  left: 0;
  top: 79px;
  position: sticky;
  position: -webkit-sticky;
  z-index: 3;
`;

export const Banner2Tag = styled.div`
  display: block;
  position: absolute;
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
    height: 3.2vmax;
    width: 15vmax;
    font-size: 2.1vmax;
  }
`;

export const Banner2Img = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Banner2Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
`;
