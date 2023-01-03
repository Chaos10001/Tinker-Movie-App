import { Card, Container, Row, Col } from "react-bootstrap";
import "../Pages Styles/pemium.css";
import About from "./About";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Premium = () => {
  return (
    <>
      <Container className="p-5">
        <Row className="text-center">
          <Col>
            <h1 className="text-danger fw-bolder">Make Premium Payment</h1>
            <p className="lead p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              praesentium illo iste necessitatibus repellat nisi eligendi
              repudiandae dolore animi cum!
            </p>
          </Col>
        </Row>
        <Row className="p-5">
          <Col className="d-md-flex align-items-center justify-content-center gap-5 text-center">
            <Card border="primary" className="premium-block shadow mb-4">
              <Card.Header className="fw-bolder h1 text-danger">
                Bronze
              </Card.Header>
              <Card.Body>
                <Card.Title className="mt-4 fw-bolder h1">
                  2month Premium Bronze Card
                </Card.Title>
                <Card.Text className="lead mt-4">
                  Bronze Card allows to get access to free downloads for just{" "}
                  <span className="text-danger display-5">$10</span>
                </Card.Text>
                <button className="btn btn-danger">
                  <Link target="_blank" to="/decline">
                    Make payment
                  </Link>
                </button>
              </Card.Body>
            </Card>

            <Card border="secondary" className="premium-block shadow mb-4">
              <Card.Header className="fw-bolder h1 text-danger">
                Silver
              </Card.Header>
              <Card.Body>
                <Card.Title className="mt-4 fw-bolder h1">
                  8month Premium Silver Card
                </Card.Title>
                <Card.Text className="lead mt-4">
                  Silver Card allows to get access to free downloads for just{" "}
                  <span className="text-danger display-5">$30</span>
                </Card.Text>
                <button className="btn btn-danger">
                  <Link target="_blank" to="/decline">
                    Make payment
                  </Link>
                </button>
              </Card.Body>
            </Card>

            <Card border="success" className="premium-block shadow mb-4">
              <Card.Header className="fw-bolder h1 text-danger">
                Gold
              </Card.Header>
              <Card.Body>
                <Card.Title className="mt-4 fw-bolder h1">
                  12month Premium Gold Card
                </Card.Title>
                <Card.Text className="lead mt-4">
                  Gold Card allows to get access to free downloads for just{" "}
                  <span className="text-danger display-5">$50</span>
                </Card.Text>
                <button className="btn btn-danger">
                  <Link target="_blank" to="/decline">
                    Make payment
                  </Link>
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <About />
      <Footer />
    </>
  );
};

export default Premium;
