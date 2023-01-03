import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../Pages Styles/NavBar.css";

const Home = () => {
  return (
    <Navbar bg="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bolder text-danger">
          TINKER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto p-2">
            <Nav.Link
              as={Link}
              to="/"
              className="fw-bolder text-danger nav-a-1">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/top"
              className="fw-bolder nav-a text-white">
              Top 100 Movies
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/search"
              className="fw-bolder nav-a text-white">
              Search For Latest Movies
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/premium"
              className="fw-bolder nav-a text-white">
              Premium
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="fw-bolder nav-a text-white">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Home;

// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
// import {
//   Nav,
//   LeftContainer,
//   RightContainer,
//   NavInnerContainer,
//   NavExtendedContainer,
//   NavLinkContainer,
//   NavLink,
//   Logo,
//   OpenLink,
//   NavLinkExtended,
// } from "../styles/NavBar.style";

// const NavBar = () => {
//   const [extendNav, setExtendNav] = useState(false);
//   return (
//     <Nav extendNav={extendNav} className="sticky-top">
//       <NavInnerContainer>
//         <LeftContainer>
//           <NavLinkContainer>
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/top">Top 100 Movies</NavLink>
//             <NavLink to="/search">Search For Latest Movies</NavLink>
//             <NavLink to="/premium">Premium</NavLink>
//             <NavLink to="/contact">Contact Us</NavLink>
//             <OpenLink onClick={() => setExtendNav((curr) => !curr)}>
//               {extendNav ? (
//                 <ImCross className="display-4" />
//               ) : (
//                 <FaBars className="display-4" />
//               )}
//             </OpenLink>
//           </NavLinkContainer>
//         </LeftContainer>
//         <RightContainer>
//           {/* <Logo src={LogoImg} /> */}
//           <Logo>TINK</Logo>
//         </RightContainer>
//       </NavInnerContainer>
//       {extendNav && (
//         <NavExtendedContainer>
//           <NavLinkExtended to="/">Home</NavLinkExtended>
//           <NavLinkExtended to="/top">Top 100 Movies</NavLinkExtended>
//           <NavLinkExtended to="/search">
//             Search For Latest Movies
//           </NavLinkExtended>
//           <NavLinkExtended to="/premium">Premium</NavLinkExtended>
//           <NavLinkExtended to="/contact">Contact Us</NavLinkExtended>
//         </NavExtendedContainer>
//       )}
//     </Nav>
//   );
// };

// export default NavBar;
