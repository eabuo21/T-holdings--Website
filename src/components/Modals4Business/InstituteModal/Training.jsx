import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/css/Business/GlobalPage.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Data from "../../../assets/Images/dataCourse.jpg";

function Training() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    adaptiveHeight: false,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    pauseOnDotsHover: true,

    useCss: true,
    useTransform: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    customPaging: function (i) {
      return <div className="custom-dot  "></div>;
    },
  };

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="slick-prev " onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="slick-next " onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );
  }

  return (
    <div className="main-slider-container ">
      <h2 className="heading-text">
        Check out our numerous products & services
      </h2>
      <div
        className="dre-section-header"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          className="heading-text-for-dre"
          style={{
            fontFamily: "open sans",
            fontSize: "20px",
            fontWeight: "700",
            color: "red",
            textAlign: ";center",
          }}
        >
          Training
        </h2>
      </div>
      <Slider {...settings} className="slider-container ">
        {/*section 3*/}
        <div className="  slider-box2">
          <img className="dsc-image" src={Data} alt="" />
          <h2
            className="dsc-text"
            style={{
              width: "75%",
            }}
          >
            {" "}
            Data Analytics Training for professionals{" "}
          </h2>
        </div>

        {/*section 1*/}
        <div className="  slider-box1">
          <img className="dsc-image" src="https://shorturl.at/eoDKW" alt="" />
          <h2
            className="dsc-text"
            style={{
              width: "75%",
            }}
          >
            Data Science Training for professionals{" "}
          </h2>
        </div>

        {/*section 2*/}
        <div className="  slider-box2">
          <img className="dsc-image" src="https://shorturl.at/lqEOW" alt="" />
          <h2
            className="dsc-text"
            style={{
              width: "75%",
            }}
          >
            {" "}
            Monitoring & Evaluation Training for NGOs{" "}
          </h2>
        </div>

        {/*section 2*/}
        <div className="  slider-box2">
          <img className="dsc-image" src="https://shorturl.at/blqwL" alt="" />
          <h2
            className="dsc-text"
            style={{
              width: "75%",
            }}
          >
            {" "}
            ICT & Programming Skills Training{" "}
          </h2>
        </div>

        {/*section 2*/}
        <div className="  slider-box2">
          <img className="dsc-image" src="https://shorturl.at/tuK59" alt="" />
          <h2
            className="dsc-text"
            style={{
              width: "75%",
            }}
          >
            Web and App Development Training for professionals{" "}
          </h2>
        </div>
      </Slider>
    </div>
  );
}

export default Training;
