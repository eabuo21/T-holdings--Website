import React, { useState, useEffect } from "react";
import SpinningWheel from "../../../../src/components/SpinningWheel";
import Header from "../../../components/Header";
import Footer from "../../../components/footer";
import "../../../assets/css/ourBusiness.css";
import "../../../assets/css/3D  Scale/3D-Scale.css";
import MobileHero from "../../../assets/Images/business/t-college/mobilehero.png";
import HeroCon1 from "../../../assets/Images/business/t-college/herocon1.png";
import HeroCon2 from "../../../assets/Images/business/t-college/herocon2.png";
import Slide1 from "../../../assets/Images/business/t-college/slide1.png";
import Slide2 from "../../../assets/Images/business/t-college/slide2.png";
import Slide3 from "../../../assets/Images/business/t-college/slide3.png";
import GlobalBisPage from "../../../components/OurBusiness/GlobalBisPage";

const TongstonCollege = () => {
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
            <div className="main-hero-container">
              <img
                className="desktop-col-image"
                src={HeroCon1}
                alt="college-hero-image"
              />
              <img
                className="mobile-image-col"
                src={MobileHero}
                alt="mobile-college-image"
              />

              <text className="txt1">
                <p className="half-line-text"> Industry Focus </p>
                <h1 className="college-h1"> Tongston College</h1>
                <p className="body-text-college">
                  {" "}
                  We design and build user's entrepreneurial-thinking capacity
                  at basic & higher education and professionals, entrepreneurs
                  and institutions (post-tertiary)
                </p>
              </text>
            </div>
            <section className="college-sub-hero">
              <img src={HeroCon2} alt="college-hero-image" />
              <text className="txt2">
                We Empower
                <br />
                <span className="red-txt">
                  Entrepreneurial <br />
                  Thinking
                </span>{" "}
                Across <br />
                Basic Education Globally{" "}
              </text>
            </section>
            <h2 className="exph">Explore how</h2>
            <div className="slide-container">
              <section className="college-slide-section">
                <div className="div-1">
                  <text className="txt3">
                    By
                    <span className="red-txt2">
                      {" "}
                      Deploying Consultancy services{" "}
                    </span>{" "}
                    <br />
                    to integrate entrepreneurial thinking in
                    <br />
                    basic education in the curriculum{" "}
                  </text>{" "}
                  <br />
                  <br />
                  <img
                    className="slide-desktop-image"
                    src={Slide1}
                    alt="slide-image1"
                  />
                </div>
                <div className="div-2">
                  <text className="txt3">
                    {" "}
                    By
                    <span className="red-txt2">
                      {" "}
                      deploying learning solutions to <br /> primary and
                      secondary school students
                    </span>{" "}
                    <br />
                    on entrepreneurial education <br />
                    for the future of jobs and enterprise{" "}
                  </text>
                  <br />
                  <img
                    className="slide-desktop-image"
                    src={Slide2}
                    alt="slide-image2"
                  />
                </div>
                <div className="div-3">
                  <text className="txt3">
                    {" "}
                    By
                    <span className="red-txt3">
                      {" "}
                      deploying resources, provide access <br />
                      to entrepreneurial ecosystems{" "}
                    </span>{" "}
                    to primary <br /> and secondary school students for <br />
                    long-term impact{" "}
                  </text>{" "}
                  <br />
                  <img
                    className="slide-desktop-image"
                    src={Slide3}
                    alt="slide-image3"
                  />
                </div>
              </section>
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

export default TongstonCollege;
