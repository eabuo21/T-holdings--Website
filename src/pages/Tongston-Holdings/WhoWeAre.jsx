/** @format */

import React, { useEffect, useState } from "react";
import "../../assets/css/About.css";
import "../../assets/css/3D  Scale/3D-Scale.css";
import Hidden from "../../components/AboutPage.jsx/HIdden";
import SocialSlide from "../../components/SocialSlide";
import Header from "../../components/Header";
import TeamB from "../../components/AboutPage.jsx/TeamB";
import Footer from "../../components/footer";
import MissionCard from "../../components/AboutPage.jsx/Aboutcard/missionCard";
import CoreValue from "../../components/AboutPage.jsx/Aboutcard/CoreValue";
import { Helmet } from "react-helmet";

function About() {
  const [display, setDisplay] = useState(false);
  const [stretch, setStretch] = useState(false);

  const onEnter = () => setDisplay(true);
  const onLeave = () => setDisplay(false);
  const onStretch = () => {
    this.classList.add("stretch");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PrimaryKeywords =
    "tongston entrepreneurship group, entrepreneurial education, enterprise development,business consulting, financial services, legal services, public relations, data and research, online events management";
  //secondary keywords goes here

  const SecondaryKeywords =
    "startups,SMEs, Africa, Nigeria, investment, growth, innovation, impact, sustainability, branding, ";
  //long-tail keywords goes here

  const Longtailkeywords =
    "entrepreneurial education programs in nigeria, business consulting services for startups in africa, financial services for small and medium enterprises, legal compliance for businesses in nigeria,  public relations for entrepreneurs, data analysis for businesses, online events management platform";

  return (
    <>
    { /*
      <Helmet>
        <title> About Us</title>
        <meta name="primary-keywords" content={PrimaryKeywords} />
        <meta name="secondary-keywords" content={SecondaryKeywords} />
        <meta name="long-tail-keywords" content={Longtailkeywords} />

        <meta
          name="description"
          content=" We build valuable, profitable and influential people, governments, businesses & non-profits."
        />
        <meta property="og:title" content="About Us" />

        <meta
          property="0g:description"
          content="Tongston is a multi-award winning group focused on entrepreneurial education, enterprise, finance and media leveraging on technology for people, government and institutions to drive global sustainable socio-economic development."
        />
        <meta property="og:url" content="https://tongston.com/about" />
  </Helmet>     */}

      <div className="fade-in-who">
        <Header />
        <main className="main-about">
          <section className="order1-section">
            <div className="about-order1">
              <div className="about-order1-text">
                <div className="order1-line-border"></div>
                <div className="">
                  <h3>WE ARE</h3>
                  <h1>
                    <b>TONGSTON ENTREPRENEURSHIP GROUP</b>
                  </h1>
                  <h3> EDUCATION | MEDIA | FINANCE | ENTERPRISE</h3>
                </div>
              </div>
            </div>
          </section>
          <section className="about-order2">
            <div className="about-order2-content">
              <div className="about-order2-text-content">
                <div
                  data-aos="fade-right"
                  data-aos-easing="ease-in"
                  data-aos-duration="1000"
                  className="about-order2-text"
                >
                  <h1>Who We Are</h1>
                  <p>
                    {" "}
                    We build valuable, profitable and influential people,
                    governments, businesses & non-profits.
                  </p>
                  <p>
                    Tongston is a multi-award winning group focused on
                    entrepreneurial education, enterprise, finance and media
                    leveraging on technology for people, government and
                    institutions to drive global sustainable socio-economic
                    development.
                  </p>
                </div>
              </div>
              <div className="about-order2-text-content">
                <div
                  data-aos="fade-left"
                  data-aos-easing="ease-in"
                  data-aos-duration="1000"
                  className="about-order2-image"
                >
                  <img
                    src="https://res.cloudinary.com/de5sm2jjl/image/upload/v1681570376/TONGSTONG/Rectangle_34_vqml0m.png"
                    alt="ALT"
                    className="ceo-image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="about-order3">
            <MissionCard />
          </section>

          <section className="about-order4-1">
            <div className="about-order4-text-1">
              <h1>
                <b>Our Philosophy </b>
              </h1>
            </div>
          </section>

          <section className="about-order4">
            <div className="about-order4-text-content">
              <div className="about-order4-text ">
                <p className="about-order4-0 ">
                  We believe that <b>Entrepreneurial Thinking </b>(Value,
                  Influence & Profitability) should be at the heart of our
                  personal, professional and public life in order to make the
                  world a better place.
                </p>
              </div>
            </div>
          </section>
          <section className="about-order6">
            <CoreValue />
          </section>

          <section
            className="our-cultures"
            style={{ position: "relative", paddingtop: "0" }}
          >
            <Hidden />
          </section>
          <section className="team-bord-section">
            <div className="our-people ">Our People</div>
            <TeamB />
          </section>
          <section className="slideshow-container-body">
            <div className="slideshow-container">
              <div className="mySlides fad">
                <SocialSlide />
              </div>
            </div>
            <br />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default About;
