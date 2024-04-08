import React, { useState } from "react";
import CoverBg from "../../../assets/Images/T-STORE/scd9.png";
import "../../../assets/css/GlobalStyles/AllModals.css";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../../components/Notification/Notification";
import InstBrochure from "../../../assets/files/_T INSTITUTE TRAINING_BROCHURE December 2023.pptx.pdf";

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
          marginLeft: ";auto",
          marginRight: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          className="checkout-text "
          style={{
            fontFamily: "open sans",
            fontSize: "20px",
            fontWeight: "700",
            color: "red",
            textAlign: ";center",
          }}
        >
          {" "}
          Research and Resource Development
        </h2>

        <section className="brochures-buttons-downloads" style={{}}>
          <a href={InstBrochure} download>
            <button className="download-button-brochure ">
              Download Brochure
            </button>
          </a>
        </section>
      </div>
    </>
  );
};

export default Brochure;
