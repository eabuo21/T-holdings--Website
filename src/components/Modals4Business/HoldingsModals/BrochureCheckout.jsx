import React, { useState } from "react";
import CoverBg from "../../../assets/Images/T-STORE/scd9.png";
import "../../../assets/css/GlobalStyles/AllModals.css";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../../components/Notification/Notification";
import ITBrochure from "../../../assets/files/TONGSTON_IT_BROCHURE.pptx.pdf";
import DREBrochure from "../../../assets/files/_TONGSTON_DRE_BROCHURE.pptx.pdf";
import AdminBrochure from "../../../assets/files/T-HUB BROCHURE.pptx.pdf";

const Brochure = () => {
  return (
    <>
      <div
        className="buttons-container"
        style={{
          display: "flex ",
          flexDirection: "column",
          rowGap: "15px",
          paddingBottom: "7rem",
        }}
      >
        <h2
          className="checkout-text "
          style={{
            fontWeight: "700",
            fontFamily: " open sans",
            fontSize: "30px",
            textAlign: "center",
            paddingBottom: "3rem",
          }}
        >
          {" "}
          Checkout Our Brochures !{" "}
        </h2>

        <section className="brochures-buttons-downloads" style={{}}>
          <a href={ITBrochure} download>
            <button
              data-aos="fade-down"
              data-aos-easing="ease-in linear"
              data-aos-duration="2000"
              data-aos-delay="50"
              data-aos-anchor-placement="top-bottom"
              data-aos-mirror="true"
              data-aos-once="true"
              className="download-button-brochure "
            >
              Download IT Services Brochure
            </button>
          </a>

          <a href={DREBrochure} download>
            <button
              data-aos="fade-down"
              data-aos-easing="ease-in linear"
              data-aos-duration="2000"
              data-aos-delay="50"
              data-aos-anchor-placement="top-bottom"
              data-aos-mirror="true"
              data-aos-once="true"
              className="download-button-brochure "
            >
              Download Data & Research Services Brochure
            </button>
          </a>

          <a href={AdminBrochure} download>
            <button
              data-aos="fade-down"
              data-aos-easing="ease-in linear"
              data-aos-duration="2000"
              data-aos-delay="50"
              data-aos-anchor-placement="top-bottom"
              data-aos-mirror="true"
              data-aos-once="true"
              className="download-button-brochure "
            >
              Download Admin Services Brochure
            </button>
          </a>
        </section>
      </div>
    </>
  );
};

export default Brochure;
