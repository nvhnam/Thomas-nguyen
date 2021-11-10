import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: rgba(0, 0, 0, 1);
  margin-top: 1000px;
  /* background-color: #e2c9be; */
  /* background-color: linear-gradient(315deg, #e2c9be 0%, #fbf7e9 74%); */
  z-index: 5;

  @media screen and (max-width: 767px) {
    height: 560px;
    margin-top: 1400px;
  }

  @media screen and (width: 320px) {
    margin-top: 1200px;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  height: auto;
  max-width: 1100px;
  padding: 1rem;
  margin-top: 1rem;
  margin-left: 2rem;

  @media screen and (max-width: 1024px) {
    margin-top: 0.2rem;
  }

  @media screen and (max-width: 940px) {
    margin-left: 1.2rem;
    margin-top: -0.5rem;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0.1rem;
    margin-right: -1rem;
    margin-top: 3rem;
    width: 85%;
    padding: 0rem;
  }

  @media screen and (max-width: 320px) {
    margin-left: 0;
  }
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;

export const ContactCol1 = styled.div`
  width: 400px;
  height: auto;
  padding: 0.9rem;
  background-color: #ffdab9;
  opacity: 0.8;
  /* background-color: #e2c9be; */
  /* background-color: linear-gradient(315deg, #e2c9be 0%, #fbf7e9 74%); */
  /* box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 35%); */
  border-radius: 6px;

  @media screen and (max-width: 940px) {
    width: 360px;
  }

  @media screen and (max-width: 767px) {
    width: 85%;
    opacity: 0.75;
  }

  @media screen and (max-width: 320px) {
    padding: 0.4rem;
  }
`;

export const ContactForm = styled.form`
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;

  @media screen and (max-width: 767px) {
    padding: 0.5rem;
  }

  @media screen and (max-width: 320px) {
    padding: 0.3rem;
  }
`;

export const FormHeading = styled.h1`
  font-size: 2rem;
  color: #010606;
  text-align: center;
  margin: 1rem 0.5rem 0 0.5rem;
  font-family: var(--Rubik);

  @media screen and (max-width: 940px) {
    font-size: 1.85rem;
    margin: 0.8rem 0.4rem 0 0.4rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.3rem;
    margin: 0.4rem 0.2rem 0 0.2rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
    margin: 0.4rem 0.2rem 0 0.2rem;
  }
`;

export const FormField = styled.div`
  height: 100%;
  width: 100%;
  margin: 1rem 0;

  @media screen and (max-width: 767px) {
    margin: 0.6rem 0;
  }
`;

export const FormLabel = styled.label`
  font-size: 1rem;
  color: #010606;
  margin-right: 0.9rem;

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
    margin-right: 0.6rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
    margin-right: 0.5rem;
  }
`;

export const FormInput = styled.input`
  width: 56%;
  border: 1px solid #fff;
  outline: none;
  border-radius: 5px;
  resize: vertical;
  padding: 0.3rem;
  font-size: 1rem;

  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
    width: 52%;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.6rem;
    width: 55%;
  }
`;

export const FormTextInput = styled.textarea`
  width: 100%;
  margin-top: 0.7rem;
  height: 100px;
  outline: none;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 0.3rem;
  font-size: 0.9rem;

  @media screen and (max-width: 767px) {
    height: 70px;
    font-size: 0.7rem;
    padding: 0.2rem;
  }

  @media screen and (max-width: 320px) {
    height: 80px;
    font-size: 0.6rem;
  }
`;

export const FormButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 1.5rem;
  padding: 0.5rem;

  @media screen and (max-width: 320px) {
    padding: 1rem;
  }
`;
