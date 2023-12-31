import React, { useState, useEffect } from "react";
import SpinningWheel from "../../../../src/components/SpinningWheel";
import Header from "../../../components/Header";
import Footer from "../../../components/footer";
import "../../../assets/css/Business/T-Hold.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../assets/css/Business/GlobalPage.css";
import HoldMobile from "../../../assets/Images/business/t-holdings/HoldMobile.png";
import HoldHero1 from "../../../assets/Images/business/t-holdings/HoldHero1.png";
import HoldHero2 from "../../../assets/Images/business/t-holdings/HoldHero2.png";
import HoldSlide1 from "../../../assets/Images/business/t-holdings/HoldSlide1.png";
import HoldSlide2 from "../../../assets/Images/business/t-holdings/HoldSlide2.png";
import HoldSlide3 from "../../../assets/Images/business/t-holdings/HoldSlide3.png";
import HoldMobSlide1 from "../../../assets/Images/business/t-holdings/HoldMobSlide1.png";
import HoldMobSlide2 from "../../../assets/Images/business/t-holdings/HoldMobSlide2.png";
import HoldMobSlide3 from "../../../assets/Images/business/t-holdings/HoldMobSlide3.png";
import GlobalBisPage from "../../../components/OurBusiness/GlobalBisPage";

const TongstonHoldings = () => {
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
    <>
      <div className="main-container">
        <Header />

        {isLoading ? (
          <SpinningWheel />
        ) : (
          <div className="main-wrapper">
            <div className="t-hold-hero-container">
              <img
                className="hold-mobile-image"
                src={HoldMobile}
                alt="mobile hero image"
              />
              <img
                className="hold-desktop-image"
                src={HoldHero1}
                alt="Holdings-hero-image"
              />
              <text className="txt1">
                <p className="half-line-text"> Industry Focus </p>
                <h1 className="hold-h1"> Tongston Holdings</h1>
                <p className="body-text-hold">
                  {" "}
                  We set, administer and monitor the model, methodologies and{" "}
                  technologies of the entrepreneurial-thinking ecosystem and
                  user- experiences for public, private and non-profit
                  intrapreneurs, entrepreneurs and institutions.
                </p>
              </text>
            </div>

            <section className="hold-sub-hero">
              <img src={HoldHero2} alt="Holdings-hero-image" />
              <text className="txt2">
                We unlock{" "}
                <span className="red-txt">
                  Value, Influence & Profitability{" "}
                </span>
                for Clients through our enterprise solutions{" "}
              </text>
            </section>
            <h2 className="exph"> Explore how</h2>

            <div className="main-slider-con ">
              <Slider {...settings} className="slider-con ">
                <div className="slide-container">
                  <section className="hold-slide-section">
                    <div data-aos="fade-up" id="hold-slide-container">
                      <div className="div-1">
                        <text className="txt3">
                          By{" "}
                          <span className="red-txt2">
                            deploying Data & Research Solution{" "}
                          </span>{" "}
                          to non-profits, public & private sector
                        </text>{" "}
                        <img
                          className="slide-desktop-image"
                          src={HoldSlide1}
                          alt="slide-image1"
                        />
                        <img
                          className="slide-mobile-image"
                          src={HoldMobSlide1}
                          alt="slide-mobile-image"
                        />
                      </div>
                      <div className="div-2">
                        <text className="txt3">
                          By{" "}
                          <span className="red-txt2">
                            integrating technology
                          </span>{" "}
                          through training & consultancy
                        </text>

                        <img
                          className="slide-desktop-image"
                          src={HoldSlide2}
                          alt="slide-image2"
                        />
                        <img
                          className="slide-mobile-image"
                          src={HoldMobSlide2}
                          alt="slide-image2"
                        />
                      </div>
                      <div className="div-3">
                        <text className="txt3">
                          {" "}
                          By{" "}
                          <span className="red-txt3">
                            providing administration, HR, governance, strategy,
                            accounting & HR solutions
                          </span>{" "}
                          through our{" "}
                          <a
                            href="https://t-hub.tongston.com/"
                            target="_blank"
                            style={{
                              textDecoration: "underline",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            Tongston Hub{" "}
                          </a>{" "}
                        </text>{" "}
                        <img
                          className="slide-desktop-image"
                          src={HoldSlide3}
                          alt="slide-image3"
                        />
                        <img
                          className="slide-mobile-image"
                          src={HoldMobSlide3}
                          alt="slide-image3"
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </Slider>
            </div>
            <GlobalBisPage />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default TongstonHoldings;
