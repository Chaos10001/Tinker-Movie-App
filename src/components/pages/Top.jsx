import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Pages Styles/top.css";
import Pagination from "./Pagination";
import Posts from "./Posts";
import About from "./About";
import Footer from "./footer";

const Top = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  const [container, setContainer] = useState([]);

  useEffect(() => {
    fetchme();
  }, []);
  const fetchme = () => {
    fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4a77e17591mshf3813ad7a2f92c7p1e6105jsn81dd22a83a67",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContainer(data);
      })
      .catch((err) => console.error(err));
  };
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = container.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Container className="p-5">
        <Posts container={currentPosts} />
        <Pagination
          postPerPage={postPerPage}
          totalPosts={container.length}
          paginate={paginate}
        />
      </Container>
      <About />
      <Footer />
    </>
  );
};

export default Top;
// https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies/
