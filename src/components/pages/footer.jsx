import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "react-bootstrap-icons";
import "../Pages Styles/footer.css";
import { useEffect, useState } from "react";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => {
    setDate(new Date().getFullYear());
  };

  useEffect(() => {
    getYear();
  }, []);
  return (
    <footer>
      <Container className="pt-3">
        <Row className="justify-content-center align-items-center">
          <Col sm={6} lg={4}>
            <h1 className="text-danger ">Follow us</h1>
            <div className="icons pt-3">
              <Facebook className="icon" />
              <Twitter className="icon ms-3" />
              <Instagram className="icon ms-3" />
              <Linkedin className="icon ms-3" />
              <Youtube className="icon ms-3" />
            </div>
          </Col>
          <Col sm={6} lg={4} className="mt-5">
            <h1 className="text-danger ">About Us</h1>
            <div className="links">
              <Link to="/about" className="fw-bolder text-white p-link a-link">
                About us
              </Link>

              <p className="fw-bolder text-white p-link">Privacy & Policy</p>

              <p className="fw-bolder text-white p-link">Terms and Conditon</p>
              <p className="fw-bolder text-white p-link">Help</p>
            </div>
          </Col>
          <Col lg={4} sm={6} className="mt-5">
            <h1 className="text-danger ">My Account</h1>
            <div className="text">
              <Link
               
               
                to="/contact"
                className="fw-bolder text-white p-link a-link">
                Contact Us
              </Link>
              <p className="fw-bolder text-white p-link">Sign Up</p>

              <p className="fw-bolder text-white p-link">View Cart</p>
              <p className="fw-bolder text-white p-link">My Wishlist</p>
            </div>
          </Col>
        </Row>
      </Container>
      <h5 className="text-center text-danger">Chaos @{date}</h5>
    </footer>
  );
};

export default Footer;
