import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  z-index: 4;
  background-color: #e2c9be;
  background-color: linear-gradient(315deg, #e2c9be 0%, #fbf7e9 74%);
  position: sticky;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  margin-left: 5rem;
  padding: 0.5rem;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
    padding-left: 2rem;
  }

  @media screen and (max-width: 940px) {
    padding-left: 1.3rem;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0;
    padding: 0;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const FooterCol1 = styled.div`
  width: 60%;
  height: 100%;
  margin-top: 0rem;
  padding: 1rem;

  @media screen and (max-width: 940px) {
    padding: 0.7rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 1.7rem;
  }

  @media screen and (max-width: 320px) {
    padding: 1.5rem;
  }
`;

export const FooterHeading = styled.h1`
  font-size: 1.5rem;
  color: black;
  margin-bottom: 0.3rem;

  @media screen and (max-width: 940px) {
    font-size: 1.37rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
`;

export const FooterPara = styled.p`
  font-size: 0.9rem;
  color: #010606;

  @media screen and (max-width: 767px) {
    font-size: 0.75rem;
  }
`;

export const FooterAuthor = styled.span`
  font-size: 0.9rem;
  color: #ffbe0b;
  font-weight: 600;

  @media screen and (max-width: 767px) {
    font-size: 0.75rem;
  }
`;

export const FooterContactInfo = styled.div`
  display: block;
  margin-top: 0.9rem;

  @media screen and (max-width: 767px) {
    margin-top: 0.7rem;
  }

  @media screen and (max-width: 320px) {
    margin-top: 0.5rem;
  }
`;

export const FooterIcon = styled.a`
  padding-right: 1.5rem;
  color: #010606;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;

  @media screen and (max-width: 767px) {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    padding-right: 1rem;
  }
`;

export const FooterContact = styled.span`
  font-size: 1rem;
  color: #010606;
  font-style: oblique;
  margin-left: 0.6rem;

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const FooterCol2 = styled.div`
  width: 40%;
  height: 100%;
  margin-left: 2.5rem;
  padding: 1rem;
  margin-top: -1rem;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    padding: 1.7rem;
    margin-top: -2.1rem;
  }
`;

export const FooterIconWrapper = styled.div`
  display: inline-flex;
  padding: 1rem;
  margin-left: -0.8rem;

  @media screen and (max-width: 767px) {
    margin-left: -1rem;
  }
`;
