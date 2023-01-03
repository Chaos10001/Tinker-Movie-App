import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Pages Styles/about.css";

const About = () => {
  const image =
    "data:image/jpeg;base64,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";
  return (
    <>
      <Container className="p-5">
        <Row className="text-center">
          <Col>
            <h1 className="text-danger fw-bolder">Learn More About Us</h1>
            <p className="lead pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              ipsa soluta porro laborum ipsum cumque molestias dolorum totam
              placeat fugiat?
            </p>
          </Col>
        </Row>
        <Row className="pt-5 text-center align-items-center justify-content-center">
          <Col className="">
            {/* <img src={image} alt="" /> */}
            <img src="./main.jpg" alt="" />
          </Col>
          <Col className="mt-5 ">
            <p className="lead p-div">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus, vero totam ipsam aut ab officia, consequatur est magnam
              autem facilis recusandae eveniet odit. Est quia accusantium rem
              sequi porro! Sapiente officiis cumque fugit neque nihil autem sed
              ad soluta quis recusandae qui saepe deleniti ipsam nemo accusamus,
              sint omnis itaque amet. Voluptate a perspiciatis distinctio in!
              Impedit quae amet suscipit?
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
