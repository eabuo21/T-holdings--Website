import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/css/Business/GlobalPage.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cloud from "../../../assets/Images/business/t-holdings/modal-images/it1.jpeg";
import Ai from "../../../assets/Images/business/t-holdings/modal-images/ai.jpeg";
import Web from "../../../assets/Images/business/t-holdings/modal-images/web.jpg";
import UI from "../../../assets/Images/business/t-holdings/modal-images/uiux.jpeg";
import SEO from "../../../assets/Images/business/t-holdings/modal-images/seo.jpeg";
import SMAP from "../../../assets/Images/business/t-holdings/modal-images/map.png";

function IT () {
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
      Information Technology
        </h2>
      </div>
      <Slider {...settings} className="slider-container ">
        {/*section 1*/}
        <div className="  slider-box1">
          <img className="dsc-image" src={Cloud} alt="" />
          <h2 className="dsc-text"> Software Solutions - Cloud</h2>
        </div>

        {/*section 2*/}
        <div className="  slider-box2">
          <img className="dsc-image" src={Ai} alt="" />
          <h2 className="dsc-text"> AI Business Solutions </h2>
        </div>

        {/*section 3*/}
        <div className="  slider-box3">
          <img className="dsc-image" src={Web} alt="" />
          <h2 className="dsc-text"> Web & App  Development </h2>
        </div>

        {/*section 4*/}
        <div className="  slider-box4">
          <img className="dsc-image" src={UI} alt="" />
          <h2 className="dsc-text"> Product Design (UI/UX) </h2>
        </div>

        {/*section 5*/}
        <div className="  slider-box5">
          <img className="dsc-image" src={SEO} alt="" />
          <h2 className="dsc-text"> Search Engine Optimization</h2>
        </div>

        {/*for the  IT Products  */}
        <div className="  slider-box6">
          <img className="dsc-image" src={SMAP} alt="" />
          <h2 className="dsc-text"> Site Mapping / Indexing</h2>
        </div>

       
      </Slider>

   
   
    </div>
  );
}

export default IT;
