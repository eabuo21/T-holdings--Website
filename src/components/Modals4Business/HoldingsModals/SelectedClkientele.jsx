import React from "react";
import "./../../../assets/css/GlobalStyles/AllModals.css";

// let us import the images to be used afo r teh e carousel  here and te n used them in thee code
import Client1 from "../../../assets/Images/business/t-holdings/modal-images/slcl1.png";
import Client2 from "../../../assets/Images/business/t-holdings/modal-images/slcl2.jpg";
import Client3 from "../../../assets/Images/business/t-holdings/modal-images/slcl3.jpg";
import Client4 from "../../../assets/Images/business/t-holdings/modal-images/slcl4.png";

const SelectedClientele = () => {
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
          <img className="slider-image-flip" src={Client1} alt="image" />
          <img className="slider-image-flip" src={Client2} alt="image" />
          <img className="slider-image-flip" src={Client3} alt="image" />
                  <img className="slider-image-flip" src={Client4} alt="image" />
                  <div className="slider-image-flex" style={{
                    background: 'grey',
                    padding: '1rem',
                  }}>
                      <text className="">
                          Africa Integrated Industrial Corporation
                      </text>
                  </div>
        </div>

        <section
          className="get-intouch-section"
          style={{
            paddingTop: "3rem",
          }}
        >
         
        </section>
      </div>
    </>
  );
};
export default SelectedClientele;
