import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  height: 80px;
  background-color: rgba(0, 2, 5.5, 0.98);
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
  font-size: 1rem;
  position: sticky;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -o-sticky;
  position: -ms-sticky;
  margin-top: -44px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }

  @media screen and (max-width: 940px) {
    padding: 0.5rem;
  }

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

export const NavLogo = styled.div`
  justify-self: flex-start;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 940px) {
    margin-left: 0;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`;

export const LogoName = styled.div`
  color: #ffbe0b;
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: 940px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 767px) {
    margin-left: 1.6rem;
    font-size: 1.3rem;
  }

  @media screen and (width: 414px) {
    margin-left: 2.8rem;
  }

  @media screen and (max-width: 320px) {
    margin-left: 1.6rem;
    font-size: 1.1rem;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    color: #ffbe0b;
    cursor: pointer;
    align-items: center;
    font-size: 1.8rem;
    margin-bottom: 1.9rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.6rem;
    margin-right: -0.3rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  margin-left: -20px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  align-items: center;
`;

export const NavLink = styled(LinkS)`
  cursor: pointer;
  font-size: 1.2rem;
  color: #fff;
  align-items: center;
  padding: 0.5rem 1.6rem;
  height: 100%;
  transition: all 0.2s ease;

  &.active {
    border-bottom: 2px solid #ffbe0b;
  }

  @media screen and (max-width: 940px) {
    padding: 0.5rem 1.3rem;
    font-size: 1.1rem;
  }
`;
