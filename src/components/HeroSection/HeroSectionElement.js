import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 533px;
  background-color: rgba(0, 2, 5.5, 0.98);
  color: #fff;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 767px) {
    height: 600px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  height: 100%;
`;

export const HeroRow = styled.div`
  justify-content: space-between;
  display: flex;

  @media screen and (max-width: 767px) {
    justify-content: unset;
  }
`;

export const Col1 = styled.div`
  padding: 10px 30px;
  width: 50%;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    padding-right: 1rem;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    color: white;
    padding: 18px 33px;
  }
`;

export const Heading = styled.h1`
  font-size: 48px;
  letter-spacing: 2px;
  padding-top: 100px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 15px;

  @media screen and (max-width: 940px) {
    font-size: 2.3rem;
  }

  @media screen and (max-width: 767px) {
    padding-top: 117px;
    font-size: 37px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 320px) {
    padding-top: 100px;
    font-size: 30px;
    margin-bottom: 13px;
  }
`;

export const Text = styled.p`
  font-size: 21px;
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.7;

  @media screen and (max-width: 940px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 17px;
  }

  @media screen and (max-width: 320px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

export const BtnWrapper = styled.div`
  justify-content: center;
  display: flex;
`;

export const Col2 = styled.div`
  width: 50%;
  z-index: 1;

  @media screen and (max-width: 767px) {
    /* position: absolute;
    display: flex;
    margin-left: -5.5rem;
    padding-left: 1rem;
    padding-top: 8rem; */
    display: none;
  }
`;

export const ImgWrapper = styled.div`
  width: auto;
  display: flex;
  justify-self: flex-end;
`;
