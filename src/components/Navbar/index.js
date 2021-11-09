import React from "react";
import {
  Nav,
  NavbarContainer,
  LogoName,
  NavLogo,
  MenuIcon,
  NavMenu,
  NavItems,
  NavLink,
} from "./NavbarElement";
import { FaBars } from "react-icons/fa";
import logo from "../../images/Band/Band logo 2.png";
import "./Navbar.css";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav >
        <NavbarContainer>
          <NavLogo>
            <img src={logo} alt="band logo" />
            <LogoName>LéEntertainment</LogoName>
          </NavLogo>
          <MenuIcon onClick={toggle}>
            <FaBars />
          </MenuIcon>
          <NavMenu>
            <NavItems>
              <NavLink
                to="about"
                smooth={true}
                duration={900}
                spy={true}
                exact="true"
                offset={-79}
              >
                About
              </NavLink>
              <NavLink
                to="live"
                smooth={true}
                duration={900}
                spy={true}
                exact="true"
                offset={-220}
              >
                Live
              </NavLink>
              <NavLink
                to="recording"
                smooth={true}
                duration={900}
                spy={true}
                exact="true"
                offset={-270}
              >
                Recording
              </NavLink>
              <NavLink
                to="contact"
                smooth={true}
                duration={900}
                spy={true}
                exact="true"
                offset={-40}
              >
                Contact
              </NavLink>
            </NavItems>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
