import React from "react";
import StoreTransitionText from "../StoreTransitionText";

const StoreHero = () => {
  return (
    <>
      <section className="ourStore-hero-con">
        <div className="ourStore-explore-main">
          <div className="ourStore-hero-text">
            <h1>Explore Our Products</h1>
          </div>
          <div className="store-we-explore">
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
          </div>

          <div className="store-hero-btn-con">
            <a
              href="https://tongston.selar.co/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="store-hero-btn">Explore Now</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreHero;
