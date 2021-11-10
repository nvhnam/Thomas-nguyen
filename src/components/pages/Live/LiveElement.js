import styled from "styled-components";

export const LiveWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  padding: 0.5rem 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  margin-bottom: -10rem;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    margin-bottom: -20rem;
    margin-top: 4rem;
  }

  @media screen and (max-width: 940px) {
    margin-left: -0.33rem;
  }

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-bottom: -5rem;
    margin-top: 3rem;
  }

  @media screen and (max-width: 320px) {
    margin-bottom: -3rem;
  }
`;

export const LiveRow = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 0.5rem 1rem;
  }
`;

export const LiveCol1 = styled.div`
  padding: 1.5rem;
  background-color: #212529;
  opacity: 0.65;
  color: #fff;
  height: 280px;
  width: 50%;
  margin-right: 0.7rem;
  border-radius: 4px;

  @media screen and (max-width: 940px) {
    padding: 1.3rem;
    height: 230px;
    margin-right: 0.2rem;
  }

  @media screen and (max-width: 767px) {
    margin-right: 0.7rem;
    height: auto;
    width: 90%;
    text-align: center;
    padding: 0.5rem;
    margin-left: 1.2rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 320px) {
    padding: 0.3rem;
  }
`;

export const LiveHeading = styled.h1`
  font-size: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.4rem;

  @media screen and (max-width: 940px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

export const LiveDate = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.9rem;

  @media screen and (max-width: 940px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.95rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.87rem;
    margin-bottom: 0.7rem;
  }
`;

export const LiveText = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 940px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
    padding: 0 1rem;
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
    padding: 0 0.8rem;
    margin-bottom: 0.8rem;
  }
`;

export const LiveCol2 = styled.div`
  height: 280px;
  width: 20%;
  margin-left: 0.7rem;

  @media screen and (max-width: 767px) {
    width: auto;
    margin-left: 1.3rem;
    /* margin-right: auto; */
    height: 170px;
    /* padding: 0 0.5rem; */
  }

  @media screen and (max-width: 320px) {
    margin-left: 1.19rem;
  }
`;

export const LiveImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
