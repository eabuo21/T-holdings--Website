import React, { useState, useEffect } from "react";
import SpinningWheel from "../../../../src/components/SpinningWheel";
import Header from "../../../components/Header";
import Footer from "../../../components/footer";
import "../../../assets/css/Business/TVentures.css";
import VentMobile from "../../../assets/Images/business/t-ventures/VentMobile.png";
import VentHero1 from "../../../assets/Images/business/t-ventures/VentHero1.png";
import VentHero2 from "../../../assets/Images/business/t-ventures/VentHero2.png";
import VentSlide1 from "../../../assets/Images/business/t-ventures/VentSlide1.png";
import VentSlide2 from "../../../assets/Images/business/t-ventures/VentSlide2.png";
import VentSlide3 from "../../../assets/Images/business/t-ventures/VentSlide3.png";


const TongstonVentures = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); //simulate a 1 second lloading interval
  }, []);
  return (
    <>
      <div className="main-container">
        <Header />
        {isLoading ? (
          <SpinningWheel />
        ) : (
          <div className="main-wrapper">
            <section className="t-vent-hero-container">
              <img
                className="vent-mobile-image"
                src={VentMobile}
                alt="mobile image"
              />
              <img
                className="vent-desktop-image"
                src={VentHero1}
                alt="vent-hero-image"
              />

              <text className="txt1">
                <p className="half-line-text"> Industry Focus </p>
                <h1 className="vent-h1"> Tongston Ventures</h1>
                <p className="body-text-vent">
                  {" "}
                  We provides Early & Late-stage risk Capital, Structuring,
                  Business <br />
                  development and Asset management to entrepreneurial students,
                  <br />
                  educators, schools and other opportunistic businesses. 
                </p>
              </text>
            </section>

            <section className="vent-sub-hero">
              <img src={VentHero2} alt="vent-hero-image" />
              <text className="txt2">
                We{" "}
                <span className="red-txt">
                  help in <br />
                  maximizing{" "}
                </span>
                your <br />
                entrepreneurial
                <br />
                potential.
              </text>
            </section>
            <h2 className="exph"> Explore how</h2>
            <div className="slide-container">
              <section className="vent-slide-section">
                <div data-aos="fade-up" id="inst-slide-container">
                  <div className="div-1">
                    <text className="txt3">
                      By{" "}
                      <span className="red-txt2">
                        {" "}
                        providing early & late-stage risk <br />
                        capital,{" "}
                      </span>{" "}
                      we fuel entrepreneurial growth <br />
                      for students, educators, schools, and <br />
                      businesses
                    </text>{" "}
                    <br />
                    <img
                      className="slide-desktop-image"
                      src={VentSlide1}
                      alt="slide-image1"
                    />
                  </div>
                  <div className="div-2">
                    <text className="txt3">
                      {" "}
                      By{" "}
                      <span className="red-txt2">
                        {" "}
                        everaging our strategic structuring <br />
                        expertise,{" "}
                      </span>{" "}
                      , we drive optimal <br />
                      performance for entrepreneurial <br />
                      ventures.
                    </text>
                    <br />
                    <img
                      className="slide-desktop-image"
                      src={VentSlide2}
                      alt="slide-image2"
                    />
                  </div>
                  <div className="div-3">
                    <text className="txt3">
                      {" "}
                      By offering our personalized guidance
                      <br />
                      to{" "}
                      <span className="red-txt3">
                        comprehensive business <br />
                        development
                      </span>{" "}
                      and asset management <br />
                      services, we foster sustainable growth.
                    </text>{" "}
                    <br />
                    <img
                      className="slide-desktop-image"
                      src={VentSlide3}
                      alt="slide-image3"
                    />
                  </div>
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

export default TongstonVentures;
