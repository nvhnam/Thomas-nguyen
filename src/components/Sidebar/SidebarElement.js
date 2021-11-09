import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.div`
  display: grid;
  position: fixed;
  top: 0;
  right: 0;
  align-items: center;
  background: #010606;
  color: #fff;
  width: 100%;
  height: 100%;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  right: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
  transition: all 0.2s ease-in-out;
  z-index: 999;
`;

export const CloseIcon = styled.div`
  display: flex;
  color: #ffbe0b;
  font-size: 1.9rem;
  cursor: pointer;
  justify-self: flex-end;
  transform: translate(-100%, 60%);
  margin-bottom: 27vmin;
`;

export const SidebarWrapper = styled.div`
  color: goldenrod;
`;

export const SidebarMenu = styled.div`
  display: grid;
  list-style: none;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
`;

export const SidebarLink = styled(LinkS)`
  cursor: pointer;
  font-size: 1.3rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: #fff;

  &:active {
    transition: all 0.2s ease-in-out;
    color: goldenrod;
    background-color: #010606;
  }
`;
