import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Footer from "./footer";
import "../Pages Styles/contact.css";
import { Phone } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <>
      <Container className="p-5">
        <Row>
          <Col>
            <h1 className="text-danger fw-bolder text-center">
              Get In Touch With Tinker Company
            </h1>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col>
            <Phone className="nr" />
          </Col>
          <Col className="mt-4">
            <p>Phone Number: +123 34 566 77</p>
            <p>Company Location: Singapore</p>
            <p>
              Company Information: Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Necessitatibus dolorem nemo ipsa. Hic porro
              dolorum iste quia vel quos itaque.
            </p>
            <p>Company CEO: Saint Chaos</p>
            <p>Company CEO Number: 09063371705</p>
          </Col>
        </Row>
      </Container>
      <About />
      <Footer />
    </>
  );
};

export default Contact;
