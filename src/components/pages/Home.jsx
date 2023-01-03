import { Container, Row, Col } from "react-bootstrap";
import "../Pages Styles/home.css";
import { PlayCircle, Telephone } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import Slider from "./Slider";
import About from "./About";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [text, setText] = useState("");
  const toRotate = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero optio facere provident veniam aperiam cupiditate esse voluptatum minus ducimus nulla accusamus magni, hic aut nihil, modi et deserunt quasi. Nemo architecto tenetur eum numquam aspernatur ut consequatur provident repellendus tempora corrupti sunt autem neque unde asperiores recusandae, suscipit ullam officia est minima temporibus. Mollitia at voluptates ipsum qui eos corporis!",
  ];
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 900);

  useEffect(() => {
    const tinker = setInterval(() => {
      tink();
    }, delta);
    return () => clearInterval(tinker);
  }, [text]);
  const tink = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
  };
  return (
    <>
      <div className="home">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col>
              <video src="./background.mp4" autoPlay loop muted />
              <h1 className="home-h1 text-white">Tinker Movie App</h1>
              <p className="home-p lead text-warning">{text}</p>
              <div className="p-5 d-none d-lg-flex">
                <button className="btn btn-danger me-5 fw-bold">
                  <Telephone className="me-2" />
                  <Link to="/contact">Contact Us</Link>
                </button>
                <button className="btn btn-danger fw-bold">
                  <PlayCircle className="me-3" />
                  <Link to="/top">Movie Trillers</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="slider-container pt-5">
        <Slider />
      </div>
      <div className="about-container">
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
