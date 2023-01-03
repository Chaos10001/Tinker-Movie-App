import styled from "styled-components";
import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNav ? "100vh" : "80px")};
  background-color: black;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 80px;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex: 70%;
  align-items: center;
  padding-left: 5%;
`;
export const RightContainer = styled.div`
  display: flex;
  flex: 30%;
  justify-content: flex-end;
  padding-left: 50px;
`;

export const NavInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavLinkContainer = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 9px;
  transition: 0.9s ease;
  &:hover {
    color: gold;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 9px;
  transition: 0.9s ease;

  &:hover {
    color: gold;
  }
`;

export const Logo = styled.h1`
  color: gold;
  font-family: cursive;
  padding: 1rem;
`;

// export const Hamburger = styled(FaBars)`
//   width: 60px;
//   height: 40px;
//   background: none;
//   border: none;
//   color: white;
//   font-size: 11px;
//   cursor: pointer;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

export const OpenLink = styled.button`
  width: 60px;
  height: 40px;
  background: none;
  border: none;
  color: white;
  font-size: 11px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;
