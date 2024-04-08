import React, { useState, useEffect } from "react";
import SpinningWheel from "../../../../src/components/SpinningWheel";
import Header from "../../../components/Header";
import Footer from "../../../components/footer";
import "../../../assets/css/Business/Tmedia.css";

import MobileMedia from "../../../assets/Images/business/t-media/MobileMedia.png";
import MHero1 from "../../../assets/Images/business/t-media/MHero1.png";
import MHero2 from "../../../assets/Images/business/t-media/MHero2.png";
import Mslide1 from "../../../assets/Images/business/t-media/MSlide1.png";
import MSlide2 from "../../../assets/Images/business/t-media/MSlide2.png";
import MSlide3 from "../../../assets/Images/business/t-media/MSlide3.png";


const TongstonMedia = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); //Simulate a 1-second loading time
  }, []);
  return (
    <>
      <div className="main-container">
        <Header />
        {isLoading ? (
          <SpinningWheel />
        ) : (
          <div className="main-wrapper">
            <div className="t-media-hero-container">
              <img
                className="media-mobile-image"
                src={MobileMedia}
                alt="media image"
              />
              <img
                className="media-desktop-image"
                src={MHero1}
                alt="media-hero-image"
              />
              <text className="txt1">
                <p className="half-line-text"> Industry Focus </p>
                <h1 className="media-h1"> Tongston Media</h1>
                <p className="body-text-media">
                  {" "}
                  We produce, publish and manage brands, multimedia content,
                  events to <br />
                  present, market and sell intrapreneurs, entrepreneurs and
                  institutions and
                  <br />
                  their ideas and projects
                </p>
              </text>
            </div>

            <section className="media-sub-hero">
              <img src={MHero2} alt="media-hero-image" />
              <text className="txt2">
                We{" "}
                <span className="red-txt">
                  promote and <br />
                  sell your projects
                </span>{" "}
                <br />
                through dynamic
                <br />
                brand management
              </text>
            </section>
            <h2 className="exph"> Explore how</h2>
            <div className="slide-container">
              <section className="media-slide-section">
                <div className="div-1">
                  <text className="txt3">
                    By<span className="red-txt2"> unleashing the power </span>of
                    Your <br />
                    Ideas and Projects through
                    <br />
                    Strategic Brand Management.
                  </text>{" "}
                  <br />
                  <img
                    className="slide-desktop-image"
                    src={Mslide1}
                    alt="slide-image1"
                  />
                </div>
                <div className="div-2">
                  <text className="txt3">
                    {" "}
                    By crafting compelling brands that <br />
                    <span className="red-txt2">
                      {" "}
                      propel the success of intrapreneurs,{" "}
                    </span>{" "}
                    <br />
                    entrepreneurs, and institutions.
                  </text>
                  <br />
                  <img
                    className="slide-desktop-image"
                    src={MSlide2}
                    alt="slide-image2"
                  />
                </div>
                <div className="div-3">
                  <text className="txt3">
                    {" "}
                    By using engaging multimedia content
                    <br />
                    to
                    <span className="red-txt3"> tell your story </span> in
                    visually stunning <br />
                    ways.
                  </text>{" "}
                  <br />
                  <img
                    className="slide-desktop-image"
                    src={MSlide3}
                    alt="slide-image3"
                  />
                </div>
              </section>
            </div>
            <section className="last-college-sec">
           
            </section>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default TongstonMedia;
