import React from "react";
import ReactPlayer from "react-player/lazy";
import { FaFacebook, FaInstagram, FaSoundcloud } from "react-icons/fa";
import {
  RecordingContainer,
  RecordingWrapper,
  RecordingRow,
  RecordingCol1,
  RecordingBandPic,
  RecordingText1Wrapper,
  RecordingCol1Heading,
  RecordingCol1Para,
  RecordingText2Wrapper,
  SponsorText,
  SponsorLogo,
  Sponsors,
  RecordingCol2,
  RecordingCol2Heading,
  RecordingCol2Para,
  LinkToFace,
  FacebookPost,
  LinkToSound,
  SoundcloudPost,
  FollowNowText,
  BandSocialIcon,
  BandIcon,
} from "./RecordingElement";
import "./Recording.css";

const Recording = () => {
  return (
    <>
        <RecordingContainer id='recording'>
          <RecordingWrapper>
            <RecordingRow>
              <RecordingCol1>
                <RecordingBandPic className="RecordingPic"></RecordingBandPic>
                <RecordingText1Wrapper>
                  <RecordingCol1Heading>LéEntertainment</RecordingCol1Heading>
                  <RecordingCol1Para>
                    This is my "special family" because we all come from
                    different backgrounds and ages but with the love for music
                    that really connected us together and went on the same
                    journey. Without the help and support from these amazing
                    friends, i would not have done all these things.
                  </RecordingCol1Para>
                </RecordingText1Wrapper>
                <RecordingText2Wrapper>
                  <SponsorText>Speacial thanks to our sponsors</SponsorText>
                  <SponsorLogo>
                    <Sponsors
                      className="sponsor1"
                      href="//www.facebook.com/24beatstation"
                      target="_blank"
                    ></Sponsors>
                    <Sponsors
                      className="sponsor2"
                      href="//www.facebook.com/HADAband"
                      target="_blank"
                    ></Sponsors>
                    <Sponsors
                      className="sponsor3"
                      href="//www.facebook.com/TheCatchellers"
                      target="_blank"
                    ></Sponsors>
                  </SponsorLogo>
                </RecordingText2Wrapper>
              </RecordingCol1>
              <RecordingCol2>
                <RecordingCol2Heading>Our Tracks</RecordingCol2Heading>
                <RecordingCol2Para>On</RecordingCol2Para>
                <LinkToFace
                  href="//www.facebook.com/leteam.39"
                  target="_blank"
                  className="facebookName"
                >
                  Facebook
                </LinkToFace>
                <FacebookPost>
                  <ReactPlayer
                    width="auto"
                    height="auto"
                    url="https://www.facebook.com/LeTeam39/videos/1041161169700406"
                  />
                </FacebookPost>
                <RecordingCol2Para>And</RecordingCol2Para>
                <LinkToSound
                  className="soundcloudName"
                  href="//www.soundcloud.com/leteam39"
                  target="_blank"
                >
                  Soundcloud
                </LinkToSound>
                <SoundcloudPost>
                  <ReactPlayer
                    width="auto"
                    height="auto"
                    url="https://soundcloud.com/leteam39/me-yeu-cover"
                  />
                </SoundcloudPost>
                <FollowNowText>Follow us now</FollowNowText>
                <BandSocialIcon>
                  <BandIcon
                    href="//www.facebook.com/leteam.39"
                    target="_blank"
                    aria-label="facebook"
                  >
                    <FaFacebook className="facebook" />
                  </BandIcon>
                  <BandIcon
                    href="//www.instagram.com/leteam39"
                    target="_blank"
                    aria-label="instagram"
                  >
                    <FaInstagram className="instagram" />
                  </BandIcon>
                  <BandIcon
                    href="//www.soundcloud.com/leteam39"
                    target="_blank"
                    aria-label="soundcloud"
                  >
                    <FaSoundcloud className="soundcloud" />
                  </BandIcon>
                </BandSocialIcon>
              </RecordingCol2>
            </RecordingRow>
          </RecordingWrapper>
        </RecordingContainer>
    </>
  );
};

export default Recording;
