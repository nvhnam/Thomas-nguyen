import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  SidebarContainer,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <CloseIcon onClick={toggle}>
          <FaTimes />
        </CloseIcon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="about"
              smooth={true}
              duration={900}
              spy={true}
              exact="true"
              offset={-79}
              onClick={toggle}
            >
              About
            </SidebarLink>
            <SidebarLink
              to="live"
              smooth={true}
              duration={900}
              spy={true}
              exact="true"
              offset={-145}
              onClick={toggle}
            >
              Live
            </SidebarLink>
            <SidebarLink
              to="recording"
              smooth={true}
              duration={900}
              spy={true}
              exact="true"
              offset={-180}
              onClick={toggle}
            >
              Recording
            </SidebarLink>
            <SidebarLink
              to="contact"
              smooth={true}
              duration={900}
              spy={true}
              exact="true"
              offset={-79}
              onClick={toggle}
            >
              Contact
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
