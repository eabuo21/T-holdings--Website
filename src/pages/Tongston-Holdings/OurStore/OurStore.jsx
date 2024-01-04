import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import Header from "../../../components/Header";
import "../../../assets/css/store.css";
import ibooking from "../../../assets/Icons/ibooking.svg";
import mic from "../../../assets/Icons/mic.svg";
import spay from "../../../assets/Icons/spay.svg";
import StoreCategory from "../../../components/OurStoreCom/StoreCategory";
import StoreSlider1 from "../../../components/StoreSlider1";
import StoreSlider2 from "../../../components/StoreSlider2";
import StoreHero from "../../../components/OurStore/StoreHero";

const OurStore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="fade-in-store">
        <Header />
        <main className="store-main-class">
          <StoreHero />
          {/* our service section */}
          <section className="storeService-body-con">
            <h1 className="storeService-body-heading">Our Services</h1>
            <StoreSlider1 />

            <div className="store-hero-btn-con">
              <a
                href="https://tongston.selar.co/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="storeService-body-btn">Shop All</button>
              </a>
            </div>
          </section>
        </main>
        {/* Category section  */}
        <StoreCategory />
        {/* Feature Product */}
        <section className="store-featureProduct-con">
          <div className="featureProduct-heading-con">
            <h1 className="featureProduct-heading">Featured Products</h1>
            <StoreSlider2 />
          </div>
          <div className="store-hero-btn-con">
            <a
              href="https://tongston.selar.co/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="storeFeatureProduct-btn">Shop All</button>
            </a>
          </div>
          <div className="featureProduct-services-con">
            <div className="featureProduct-service-con">
              <img src={ibooking} alt="booking icon" />
              <h3>Instant Booking</h3>
            </div>
            <div className="featureProduct-service-con">
              <img src={spay} alt="booking icon" />
              <h3>Secured Payment</h3>
            </div>
            <div className="featureProduct-service-con">
              <img src={mic} alt="booking icon" />
              <h3>Customer service</h3>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default OurStore;
