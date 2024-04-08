import React from "react";
import "../../../assets/css/GlobalStyles/AllModals.css";
import Scl1 from "../../../assets/Images/business/t-college/scl1.png";
import Scl2 from "../../../assets/Images/business/t-college/scl2.png";
import Scl3 from "../../../assets/Images/business/t-college/scl3.png";
import Scl4 from "../../../assets/Images/business/t-college/scl4.png";

// let us import the images to be used afo r teh e carousel  here and te n used them in thee code

const CollegeClientele = () => {
  return (
    <>
      <div
        className="main-wrapper "
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",

          justifyContent: "center",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2
          className="checkout-brochure-section"
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Our Selected Clientele
        </h2>
        <div className="images-conteiner">
          {/*we can define how we want to slider to display using our custom css here as well */}
          <img className="slider-image-flip-c" src={Scl1} alt="image" />
          <img className="slider-image-flip-c" src={Scl2} alt="image" />
          <img className="slider-image-flip-c" src={Scl3} alt="image" />
          <img className="slider-image-flip-c" src={Scl4} alt="image" />
        </div>
      </div>
    </>
  );
};
export default CollegeClientele;
