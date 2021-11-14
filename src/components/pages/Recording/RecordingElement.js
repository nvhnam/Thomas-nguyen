import styled from "styled-components";

export const RecordingContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #e2c9be;
  background-color: linear-gradient(315deg, #e2c9be 0%, #fbf7e9 74%);
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: absolute;
  left: 0;
  top: 2350px;

  @media screen and (max-width: 1024px) {
    top: auto;
  }

  @media screen and (max-width: 940px) {
    top: auto;
  }

  @media screen and (max-width: 767px) {
    top: auto;
    height: 88rem;
    /* margin-bottom: 20rem; */
  }

  @media screen and (max-width: 320px) {
    height: 75rem;
  }
`;

export const RecordingWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
`;

export const RecordingRow = styled.div`
  display: flex;
  width: 100%;
  margin-left: 4.5rem;
  padding: 7rem 2rem 1rem 2rem;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
    margin-bottom: 20rem;
  }

  @media screen and (max-width: 320px) {
    padding: 2.2rem;
  }
`;

export const RecordingCol1 = styled.div`
  width: 60%;
  background-color: #ffdab9;
  box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 35%);
  border-radius: 5px;
  padding: 2rem;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 940px) {
    width: 54%;
  }

  @media screen and (max-width: 767px) {
    width: auto;
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 320px) {
    padding: 1.1rem;
    margin-top: 1rem;
  }
`;

export const RecordingBandPic = styled.div`
  width: auto;
  height: 300px;
  border-radius: 4px;

  @media screen and (max-width: 767px) {
    height: 130px;
    width: auto;
  }

  @media screen and (max-width: 320px) {
    height: 150px;
    width: auto;
  }
`;

export const RecordingText1Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.37);
  border-radius: 4px;
  padding: 2rem;
  width: 100%;
  height: auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    margin-top: -2rem;
  }

  @media screen and (max-width: 940px) {
    margin-top: -7rem;
    text-align: center;
    padding: 1.5rem;
  }

  @media screen and (max-width: 767px) {
    margin-top: 1.5rem;
    padding: 1rem;
  }

  @media screen and (max-width: 320px) {
    margin-top: -0.8rem;
    padding: 1rem;
  }
`;

export const RecordingCol1Heading = styled.h1`
  color: #ffbe0b;
  font-size: 2rem;
  margin-bottom: 0.8rem;
  margin-top: -0.7rem;
  text-align: center;
  font-family: var(--Rubik);

  @media screen and (max-width: 940px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
`;

export const RecordingCol1Para = styled.p`
  color: #010606;
  font-size: 1rem;

  @media screen and (max-width: 940px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
  }
`;

export const RecordingText2Wrapper = styled.div`
  width: auto;
  height: 120px;
  margin-top: 2rem;

  @media screen and (max-width: 767px) {
    height: auto;
  }

  @media screen and (max-width: 320px) {
    margin-top: 1.3rem;
  }
`;

export const SponsorText = styled.p`
  font-size: 1.17rem;
  font-weight: lighter;
  text-align: center;
  margin: 1rem 0;

  @media screen and (max-width: 940px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.75rem;
  }
`;

export const SponsorLogo = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  margin-left: 3.8rem;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 940px) {
    margin-left: 1 rem;
  }

  @media screen and (max-width: 767px) {
    margin: 0;
    padding: 0;
    margin-left: 1rem;
  }

  @media screen and (max-width: 320px) {
    margin-left: 1.3rem;
  }
`;

export const Sponsors = styled.a`
  display: inline-block;
  width: 80px;
  height: 100%;
  margin: 0 1.5rem;
  padding: 1.4rem;
  padding-bottom: -2rem;
  border-radius: 3px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 70px;
  }

  @media screen and (max-width: 940px) {
    width: 55px;
    margin: 0 0.8rem;
    padding-right: -1rem;
  }

  @media screen and (max-width: 767px) {
    padding: 1.4rem;
    width: 2rem;
    height: auto;
    margin: 0 0.65rem;
    /* margin-bottom: -1rem;
    margin-top: -0.5rem; */
    /* margin: 0; */
  }

  @media screen and (max-width: 320px) {
    padding: 1.1rem;
  }
`;

export const RecordingCol2 = styled.div`
  width: 45%;
  height: auto;
  box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 35%);
  border-radius: 5px;
  padding: 2rem;
  background-color: #ffdab9;
  margin-left: 2rem;
  margin-right: -10rem;

  @media screen and (max-width: 1024px) {
    width: 40%;
    margin-left: 0;
    margin-right: 0.7rem;
  }

  @media screen and (max-width: 940px) {
    margin-right: 0;
  }

  @media screen and (max-width: 767px) {
    width: auto;
    height: auto;
    margin: 0;
  }

  @media screen and (max-width: 320px) {
    padding: 1.1rem;
  }
`;

export const RecordingCol2Heading = styled.h1`
  color: #010606;
  font-size: 2.7rem;
  text-align: center;
  font-family: var(--Rubik);
  font-weight: 600;
  letter-spacing: 2.3px;

  @media screen and (max-width: 940px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

export const RecordingCol2Para = styled.p`
  font-size: 1.7rem;
  color: #010606;
  margin-top: 0.8rem;
  display: inline-block;
  margin-right: 0.5rem;

  @media screen and (max-width: 940px) {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.4rem;
    margin-right: 0.3rem;
    margin-top: 0.8rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
`;

export const LinkToFace = styled.a`
  text-decoration: none;
  color: blue;
  font-size: 1.7rem;
  cursor: pointer;
  font-weight: bolder;

  @media screen and (max-width: 940px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

export const FacebookPost = styled.div`
  height: auto;
  width: auto;
  margin: 1.3rem 0;

  @media screen and (max-width: 767px) {
    width: auto;
    height: 100%;
    margin-top: 0.7rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 320px) {
    margin-bottom: 1.3rem;
  }
`;

export const LinkToSound = styled.a`
  text-decoration: none;
  color: orange;
  font-size: 1.7rem;
  cursor: pointer;
  font-weight: bolder;

  @media screen and (max-width: 940px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

export const SoundcloudPost = styled.div`
  height: auto;
  width: auto;
  margin-top: 1.3rem;

  @media screen and (max-width: 767px) {
    margin-top: 0.7rem;
  }
`;

export const FollowNowText = styled.p`
  font-size: 1.3rem;
  text-align: center;
  font-weight: lighter;
  color: #010606;
  margin-top: 1rem;

  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 940px) {
    font-size: 1.27rem;
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 767px) {
    margin-top: 2rem;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 320px) {
    margin-top: 1.5rem;
    font-size: 1.1rem;
  }
`;

export const BandSocialIcon = styled.div`
  justify-content: center;
  align-items: center;
  margin-left: 3.5rem;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 940px) {
    margin-left: 0;
  }

  @media screen and (max-width: 767px) {
    margin-left: 9vw;
  }

  @media screen and (max-width: 320px) {
    margin-left: 11vw;
  }
`;

export const BandIcon = styled.a`
  cursor: pointer;
  margin: 1rem 2rem 0 1.8rem;
  display: inline-flex;
  text-decoration: none;
  color: #010606;
  font-size: 2.3rem;

  @media screen and (max-width: 1024px) {
    margin: 1.5rem 1.8rem 0 1.7rem;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 940px) {
    margin: 1.5rem 1.1rem 0 1rem;
    font-size: 2.3rem;
  }

  @media screen and (max-width: 767px) {
    margin: 1rem 6vw 0 0;
    font-size: 2.3rem;
  }

  @media screen and (max-width: 320px) {
    margin: 1rem 7vw 0 0;
    font-size: 2rem;
  }
`;
