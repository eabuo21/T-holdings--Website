import React from "react";
import "../../../assets/css/GlobalStyles/AllModals.css";
import client1 from "../../../assets/Images/business/t-institute/client1.png";
import client2 from "../../../assets/Images/business/t-institute/client2.png";
import client3 from "../../../assets/Images/business/t-institute/client3.png";
import client4 from "../../../assets/Images/business/t-institute/client4.png";
import client5 from "../../../assets/Images/business/t-institute/client5.png";
import client6 from "../../../assets/Images/business/t-institute/client6.png";

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
          <img className="slider-image-flip" src={client1} alt="image" />
          <img className="slider-image-flip" src={client2} alt="image" />
          <img className="slider-image-flip" src={client3} alt="image" />
          <img className="slider-image-flip" src={client4} alt="image" />
          <img className="slider-image-flip" src={client5} alt="image" />
          <img className="slider-image-flip" src={client6} alt="image" />
        </div>
      </div>
    </>
  );
};
export default CollegeClientele;
