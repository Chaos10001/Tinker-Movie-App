import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Pages Styles/top.css";

const Posts = ({ container }) => {
  return (
    <div>
      <Row className="justify-content-center align-items-center text-center">
        {container &&
          container.map((container, index) => {
            return (
              <Col>
                <div className="content shadow-lg gap-3 rounded" key={index}>
                  <img className="rounded" src={container.image} alt="" />
                  <h5>
                    <span
                      style={{
                        color: "red",
                      }}>
                      Title:
                    </span>
                    {container.title}
                  </h5>
                  <h4>Rating: {container.rating}</h4>
                  <h4>
                    <span
                      style={{
                        color: "red",
                      }}>
                      Director:
                    </span>
                    {container.director}
                  </h4>
                  <p>
                    <span
                      style={{
                        color: "red",
                      }}>
                      Year:
                    </span>
                    {container.year}
                  </p>
                  <a
                    href={container.trailer}
                    className="links-a"
                    target="_blank">
                    Movie Triller
                  </a>
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Posts;
