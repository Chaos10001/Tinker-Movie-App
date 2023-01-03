import React, { useEffect, useState } from "react";
import "../Pages Styles/slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import digitalData from "../data/data";
import { Link } from "react-router-dom";

const SliderPage = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [date, setDate] = useState();

  const getYear = () => {
    setDate(new Date().getFullYear());
  };

  useEffect(() => {
    getYear();
  }, []);

  return (
    <>
      <div className="slider">
        <div className="head text-center pb-5 col-sm-12 col-lg-12">
          <h1>Top Movies Of The Year</h1>
          <p className="text-danger lead mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            tenetur veritatis adipisci iste architecto veniam consequuntur.
          </p>
        </div>

        <Slider {...settings}>
          {digitalData.map((item) => (
            <>
              <div className="card text-center">
                <div className="card-top">
                  <img src={item.img} alt="" />
                </div>
                <div className="card-bottom">
                  <h5 className="mt-2">
                    <span className="text-danger">Title: </span>
                    {item.title}
                  </h5>
                  <p className="text-white">
                    <span className="text-danger">Content:</span> {item.body}
                  </p>
                  <p>
                    <span className="text-danger">Rating as at {date}: </span>
                    {item.rating}
                  </p>
                  <button className="btn btn-danger">
                    {" "}
                    <Link to="/premium">Download</Link>{" "}
                  </button>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderPage;
