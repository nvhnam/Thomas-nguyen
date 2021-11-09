import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
  white-space: nowrap;
  /* display: flex; */
  text-align: center;
  outline: none;
  text-decoration: none;
  border: ${({ withBorder }) => (withBorder ? "2px solid #ffbe0b" : "none")};
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  color: ${({ bright }) => (bright ? "#fff" : "#010606")};
  padding: ${({ big }) => (big ? "16px 85px" : "10px 48px")};
  background-color: ${({ primary }) => (primary ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "28px" : "18px")};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#010606")};
    transition: all 0.2s ease-in-out;
    color: ${({ bright }) => (bright ? "#010606" : "#fff")};
    border: none;
  }

  @media screen and (max-width: 768px) {
    padding: 11px 50px;
    font-size: 18px;
  }
`;
