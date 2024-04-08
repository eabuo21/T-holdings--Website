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

function Admin() {
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
          Consultancy
        </h2>
      </div>
      <Slider {...settings} className="slider-container ">
        {/*section 3*/}
        <div className="  slider-box2">
          <img className="dsc-image" src="https://shorturl.at/fkzFK" alt="" />
          <h2
            className="dsc-text"
            style={{
              width: "75%",
            }}
          >
            {" "}
            Entrepreneurial Education Consulting for Secondary Schools{" "}
          </h2>
        </div>

        {/*section 3*/}
        <div className="  slider-box2">
          <img className="dsc-image" src="https://shorturl.at/mtQTU" alt="" />
          <h2
            className="dsc-text"
            style={{
              width: "75%",
            }}
          >
            y Entrepreneurial Education Consulting for Tertiary Institutions{" "}
          </h2>
        </div>

        {/*section 3*/}
        <div className="  slider-box2">
          <img className="dsc-image" src="https://shorturl.at/cerK7" alt="" />
          <h2
            className="dsc-text"
            style={{
              width: "75%",
            }}
          >
            {" "}
            Entrepreneurial Education Consulting for Non-Profits{" "}
          </h2>
        </div>

        {/*section 3*/}
        <div className="  slider-box2">
          <img className="dsc-image" src="https://shorturl.at/vBIPU" alt="" />
          <h2
            className="dsc-text"
            style={{
              width: "75%",
            }}
          >
            {" "}
            Entrepreneurial Education Consulting for Governments{" "}
          </h2>
        </div>

        {/*section 1*/}
        <div className="  slider-box1">
          <img className="dsc-image" src="https://shorturl.at/jCZ38" alt="" />
          <h2
            className="dsc-text"
            style={{
              width: "75%",
            }}
          >
            {" "}
            Curriculum Design & Development{" "}
          </h2>
        </div>
      </Slider>
    </div>
  );
}

export default Admin;
