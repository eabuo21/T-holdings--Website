import React, { useState, useEffect } from "react";
import SpinningWheel from "../../../../src/components/SpinningWheel";
import Header from "../../../components/Header";
import Footer from "../../../components/footer";
import "../../../assets/css/Business/T-Inst.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../assets/css/Business/GlobalPage.css";
import InstMobile from "../../../assets/Images/business/t-institute/InstMobile.png";
import InstHeroCon1 from "../../../assets/Images/business/t-institute/InstHeroCon1.png";
import InstHeroCon2 from "../../../assets/Images/business/t-institute/InstHeroCon2.png";
import InstSlide1 from "../../../assets/Images/business/t-institute/InstSlide1.png";
import InstSlide2 from "../../../assets/Images/business/t-institute/InstSlide2.png";
import InstSlide3 from "../../../assets/Images/business/t-institute/InstSlide3.png";
import GlobalBisPage from "../../../components/OurBusiness/GlobalBisPage";

const TongstonInstitute = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); //Simulate a 1-second loading time
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
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
          slidesToShow: 1,
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
    <>
      <div className="main-container">
        <Header />
        {isLoading ? (
          <SpinningWheel />
        ) : (
          <div className="main-wrapper">
            <div className="t-inst-hero-container">
              <img
                className="inst-mobile-image"
                src={InstMobile}
                alt="inst-mobile-image"
              />
              <img
                className="inst-desktop-image"
                src={InstHeroCon1}
                alt="inst-hero-image"
              />

              <text className="txt1">
                <p className="half-line-text"> Industry Focus </p>
                <h1 className="inst-h1"> Tongston Institute</h1>
                <p className="body-text-inst">
                  {" "}
                  We provide Consulting, Curriculum Design, Development &
                  Integration, Training, Research and Resources for
                  entrepreneurial
                 
                  educators and tertiary & secondary schools
                </p>
              </text>
            </div>

            <section className="inst-sub-hero">
              <img src={InstHeroCon2} alt="inst-hero-image" />
              <text className="txt2">
                We Empower <br />
                <span className="red-txt">
                  Entrepreneurial Thinking
                </span>Across All EducationLevels Globally
              </text>
            </section>
            <h2 className="exph"> Explore how </h2>

            <div className="main-slider-con ">
              <Slider {...settings} className="slider-con ">
                <div className="slide-container">
                  <section className="inst-slide-section">
                    <div data-aos="fade-up" id="inst-slide-container">
                      <div className="div-1">
                        <text className="txt3">
                          By
                          <span className="red-txt2">
                            {" "}
                            Deploying Consultancy services
                            to integrate entrepreneurial  </span>{" "} thinking
                            in education in the 
                            curriculum
                         
                          and support entrepreneurial students.
                        </text>{" "}
                      
                        <img
                          className="slide-desktop-image"
                          src={InstSlide1}
                          alt="slide-image1"
                        />
                      </div>
                      <div className="div-2">
                        <text className="txt3">
                          By{" "}
                          <span className="red-txt2">
                            {" "}
                            training people, institutions  </span>{" "}& governments
                            on entrepreneurial education
                           
                         
                        </text>
                       
                        <img
                          className="slide-desktop-image"
                          src={InstSlide2}
                          alt="slide-image2"
                        />
                      </div>
                      <div className="div-3">
                        <text className="txt3">
                          {" "}
                          By  conducting research & providing <span className="red-txt2">
                          platforms & resources for entrepreneurs,{" "}
                              intrapreneurs &</span>
                            institutions globally to attain
                          value, influence & profitability
                        </text>{" "}
                       
                        <img
                          className="slide-desktop-image"
                          src={InstSlide3}
                          alt="slide-image3"
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </Slider>
            </div>
            <section className="last-college-sec">
              <GlobalBisPage />
            </section>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default TongstonInstitute;
