import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/Business/GlobalPage.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as RouterLink } from "react-router-dom";
import DGM from "../../assets/Images/PRO SLIDES/digital m.webp";
import DS from "../../assets/Images/PRO SLIDES/dre.webp";
import GD from "../../assets/Images/PRO SLIDES/gd.png";
import HWM from "../../assets/Images/PRO SLIDES/hwm.jpg";
import SWM from "../../assets/Images/PRO SLIDES/swm.jpg";
import SDEV from "../../assets/Images/PRO SLIDES/softdev.jpg";
import VED from "../../assets/Images/PRO SLIDES/ve.webp";

function InstituteCarousel() {
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

      <Slider {...settings} className="slider-container ">
        {/*section 1*/}
        <div className="  slider-box1">
          <img className="dsc-image" src={DGM} alt="" />
          <h2 className="dsc-text"> Digital Marketing</h2>
        </div>

        {/*section 2*/}
        <div className="  slider-box2">
          <img className="dsc-image" src={GD} alt="" />
          <h2 className="dsc-text"> Graphics Design </h2>
        </div>

        {/*section 2*/}
        <div className="  slider-box3">
          <img className="dsc-image" src={DS} alt="" />
          <h2 className="dsc-text"> Data Science & Analytics </h2>
        </div>

        {/*section 2*/}
        <div className="  slider-box4">
          <img className="dsc-image" src={HWM} alt="" />
          <h2 className="dsc-text"> Hardware Maintenance </h2>
        </div>

        {/*section 2*/}
        <div className="  slider-box5">
          <img className="dsc-image" src={SWM} alt="" />
          <h2 className="dsc-text"> Software Maintenance</h2>
        </div>

        {/*section 2*/}
        <div className="  slider-box6">
          <img className="dsc-image" src={SDEV} alt="" />
          <h2 className="dsc-text"> Software Development</h2>
        </div>

        {/*section 2*/}
        <div className="  slider-box7">
          <img className="dsc-image" src={VED} alt="" />
          <h2 className="dsc-text"> Video Editing</h2>
        </div>
      </Slider>

      <section className="under-text">
        <p className="bottom-text">
          Contact us to provide a custom solution for you
        </p>
        <RouterLink to="/Contact">
          <button className="get-button">Get In Touch</button>
        </RouterLink>
      </section>
    </div>
  );
}

export default InstituteCarousel;
