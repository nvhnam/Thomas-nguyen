import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterRow,
  FooterCol1,
  FooterCol2,
  FooterHeading,
  FooterPara,
  FooterAuthor,
  FooterContactInfo,
  FooterIcon,
  FooterContact,
  FooterIconWrapper,
} from "./FooterElement";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterRow>
            <FooterCol1>
              <FooterHeading>About Us</FooterHeading>
              <FooterPara>
                All rights reserved || Copyright © {new Date().getFullYear()} by{" "}
                <FooterAuthor>Thomas Nguyen</FooterAuthor>
              </FooterPara>
              <FooterContactInfo>
                <FooterIcon>
                  <MdOutlineEmail />
                  <FooterContact>nvhnam01@gmail.com</FooterContact>
                </FooterIcon>
                <FooterIcon>
                  <FaPhoneAlt />
                  <FooterContact>0328659200</FooterContact>
                </FooterIcon>
              </FooterContactInfo>
            </FooterCol1>
            <FooterCol2>
              <FooterHeading>Follow Us</FooterHeading>
              <FooterPara>on solcial media</FooterPara>
              <FooterIconWrapper>
                <FooterIcon
                  href="//www.facebook.com/nvh.nam01/"
                  target="_blank"
                >
                  <FaFacebook />
                </FooterIcon>
                <FooterIcon
                  href="//www.instagram.com/leteam.official"
                  target="_blank"
                >
                  <FaInstagram />
                </FooterIcon>
                <FooterIcon href="/www.twitter.com/nvhnam01" target="_blank">
                  <FaTwitter />
                </FooterIcon>
                <FooterIcon
                  href="//www.youtube.com/channel/UC_VSU6o-vyJ3RQKb8vnVmYQ?app=desktop"
                  target="_blank"
                >
                  <FaYoutube />
                </FooterIcon>
              </FooterIconWrapper>
            </FooterCol2>
          </FooterRow>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
