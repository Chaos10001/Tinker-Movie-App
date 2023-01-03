import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <Container>
        <Row className="align-items-center justify-content-center ">
          <nav>
            <ul className="pagination">
              {pageNumbers.map((number) => (
                <Col>
                  <li key={number} className="page-item">
                    <a onClick={() => paginate(number)} className="page-link">
                      {number}
                    </a>
                  </li>
                </Col>
              ))}
            </ul>
          </nav>
        </Row>
      </Container>
    </>
  );
};

export default Pagination;
