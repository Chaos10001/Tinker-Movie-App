import React from "react";
import "../Pages Styles/search.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Footer from "./footer";

const Search = () => {
  const [endPoint, setEndPoint] = useState("");
  const [finalPoint, setFinalPoint] = useState("");
  const [container, setContainer] = useState([]);

  useEffect(() => {
    fetchMe();
  }, [finalPoint]);

  const fetchMe = () => {
    fetch(
      `https://online-movie-database.p.rapidapi.com/auto-complete?q=${endPoint}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "4a77e17591mshf3813ad7a2f92c7p1e6105jsn81dd22a83a67",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContainer(data.d);
      })
      .catch((err) => console.error(err));
  };
  const onChangeHandler = (e) => {
    setEndPoint(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalPoint(endPoint);
  };
  return (
    <>
      <Container className="p-5">
        <Row className="align-items-center justify-content-center">
          <Col>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="search for movies"
                  value={endPoint}
                  onChange={onChangeHandler}
                />
                {/* <input type="text" value={endPoint} onChange={onChangeHandler} /> */}
                <Button variant="primary" type="submit" className="m-3">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center ">
          {container.map((item, index) => {
            return (
              <Col>
                <div
                  className="content-div content shadow-lg gap-3 rounded"
                  key={index}>
                  <img src={item.i.imageUrl} alt="" />
                  <p className="mb-2 fw-bolder">
                    {" "}
                    <span className="text-danger">Title: </span> {item.l}
                  </p>
                  <p className="mb-2 fw-bolder">
                    {" "}
                    <span className="text-danger">Actors:</span> {item.s}
                  </p>
                  <p className="mb-2 fw-bolder">
                    {" "}
                    <span className="text-danger">Production date:</span>{" "}
                    {item.y}
                  </p>
                  <p className="mb-2 fw-bolder">
                    {" "}
                    <span className="text-danger"> Rank:</span> {item.rank}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <About />
      <Footer />
    </>
  );
};

export default Search;
