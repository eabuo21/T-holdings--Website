/** @format */

import React, { useState, useEffect } from "react";
import "../../../assets/css/home.css";
import "../../../assets/css/Media-Queries/home.css";
import "../../../assets/css/3D  Scale/3D-Scale.css";
import TransitionText from "../../../components/TransitionText";
import ClientSlider from "../../../components/LandingPage/ClientSlider";
import MailingList from "../../../components/MailingList";
import AwardSlider from "../../../components/LandingPage/AwardSlider";
import PartnerSlider from "../../../components/LandingPage/PartnerSlider";
import MainHeader from "../../../components/MainHeader";
import SocialSlide from "../../../components/SocialSlide";
import Footer from "../../../components/footer";
import OurBisCardAni from "../../../components/LandingPage/OurBisCardAni";
import Flips from "../../../components/Flips-Business-Cards/FlipCards";
import Products from "../../../components/LandingPage/Products";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showproducts, setShowProducts] = useState(false);

  const openProducts = () => {
    setShowProducts(true);
  };

  const closeProducts = () => {
    setShowProducts(false);
  };

  return (
    <>
      <div className="fade-in-home">
        <MainHeader />
        <main onClick={() => setModalOpen(true)} className="home-container">
          {/* <SocialLinks /> */}
          <section className="home-hero-con">
            <div className="home-hero-text">
              <div className="home-hero-border"></div>
              <div className="">
                <h3>WE ARE</h3>
                <h1>
                  <b>TONGSTON GROUP</b>
                </h1>
                <p>
                  {" "}
                  We make <span className="span-bold">P</span>eople,{" "}
                  <span className="span-bold">I</span>nstitutions &{" "}
                  <span className="span-bold">G</span>overnments{" "}
                  <span className="span-bold">G</span>lobally <br />
                  <span className="span-bold">V</span>aluable,{" "}
                  <span className="span-bold">I</span>nfluential &{" "}
                  <span className="span-bold">P</span>rofitable <br />
                  Through Entrepreneurial Education | Enterprise | Media |
                  Finance services
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="sub-hero">
              <TransitionText
                text1="We are Tongston group"
                text2="We Make People, Institutions & Government"
                text3="Valuable, Influential & Profitable"
                text4="Through Entrepreneurial Education, Enterprise, Media & Finance"
                text5="Led By Our 5 Integrated Businesses"
                text6="To Drive Personal, Professional & Public Development Globally"
              />
            </div>
          </section>

          {/* Business section */}
          <section className="business-container">
            <h3 className=""> Our Business</h3>
            <p>Spans across 5 segments</p>

            <div
              className="bis-card-container"
              style={{
                padding: "0.5rem",
              }}
            >
              <Flips />
            </div>
          </section>

          {/* Our store section */}
          <section className="store-container">
            <div className="ourStore-explore-SubMain">
              <div className="ourStore-hero-text">
                <h1>Explore Our Services</h1>

                {/* <div className="store-we-explore">
                  <StoreTransitionText
                    text1="Schools"
                    text2="Educators"
                    text3="Professionals"
                    text4="Upper/ Primary Elementary School Students"
                    text5="Adults & Intrapreneur"
                    text6="Secondary School/Middle & Junior School Students"
                    text7="Tertiary Students"
                    text8="Public sector/ Governments school Students"
                    text9="Information $ Non-formal Education "
                    text10="Private and non-profit organization"
                  />
                </div> */}
              </div>

              <div className="store-hero-btn-con">
                <button
                  onClick={() => openProducts()}
                  className="store-hero-btn"
                >
                  Explore Now
                </button>
                {showproducts && (
                  <Products
                    onClose={() =>
                      closeProducts()((document.body.style.overflow = "auto"))
                    }
                  />
                )}
              </div>
            </div>
          </section>

          {/* OUR CLIENTELE section  */}
          <section className="clientele-container">
            <h1> OUR CLIENTELE</h1>
            <ClientSlider />
          </section>

          {/* Our Awards & Recognition section */}
          <section className="awards-container">
            <h1> OUR AWARDS & RECOGNITION</h1>
            <AwardSlider />
          </section>
          {/* Our Partners & Affiliates section */}
          <section className="partners-container">
            <h1> OUR PARTNERS & AFFILIATES</h1>
            <PartnerSlider />
          </section>
          {/* mailing list */}
          <section>
            <MailingList />
          </section>

          <div className="slideshow-container">
            <div className="mySlides fad">
              <SocialSlide />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
