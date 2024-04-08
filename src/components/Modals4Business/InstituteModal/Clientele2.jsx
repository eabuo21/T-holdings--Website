import React from "react";
import "../../../assets/css/GlobalStyles/AllModals.css";
import client1 from "../../../assets/Images/business/t-institute/slider2/client1.png";
import client2 from "../../../assets/Images/business/t-institute/slider2/client2.png";
import client3 from "../../../assets/Images/business/t-institute/slider2/client3.png";
import client4 from "../../../assets/Images/business/t-institute/slider2/client4.png";
import client5 from "../../../assets/Images/business/t-institute/slider2/client5.png";
import client6 from "../../../assets/Images/business/t-institute/slider2/client6.png";
import client7 from "../../../assets/Images/business/t-institute/slider2/client7.png";
import client8 from "../../../assets/Images/business/t-institute/slider2/client8.png";
import client9 from "../../../assets/Images/business/t-institute/slider2/client9.png";
import client10 from "../../../assets/Images/business/t-institute/slider2/client10.png";
import client11 from "../../../assets/Images/business/t-institute/slider2/client11.png";
import client12 from "../../../assets/Images/business/t-institute/slider2/client12.png";
import client13 from "../../../assets/Images/business/t-institute/slider2/client13.png";
import client14 from "../../../assets/Images/business/t-institute/slider2/client14.png";
import client15 from "../../../assets/Images/business/t-institute/slider2/client15.png";
import client16 from "../../../assets/Images/business/t-institute/slider2/client16.png";
import client17 from "../../../assets/Images/business/t-institute/slider2/client17.png";
import client18 from "../../../assets/Images/business/t-institute/slider2/client18.png";
import client19 from "../../../assets/Images/business/t-institute/slider2/client19.png";
import client20 from "../../../assets/Images/business/t-institute/slider2/client20.png";
import client21 from "../../../assets/Images/business/t-institute/slider2/client21.png";
import client22 from "../../../assets/Images/business/t-institute/slider2/client22.png";
import client23 from "../../../assets/Images/business/t-institute/slider2/client23.png";
import client24 from "../../../assets/Images/business/t-institute/slider2/client24.png";
import client25 from "../../../assets/Images/business/t-institute/slider2/client25.png";
import client26 from "../../../assets/Images/business/t-institute/slider2/client26.png";

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
            width: "50%",
            textAlign: "center",
            paddingBottom: "2rem",
          }}
        >
          our individual clientele work for several leading public, private &
          non-profit institutions
        </h2>
        <div className="client-slider">
          <div className="client-slider-wrapper">
            {/*we can define how we want to slider to display using our custom css here as well */}
            <img className="client-img" src={client1} alt="image" />
            <img className="client-img" src={client2} alt="image" />
            <img className="client-img" src={client3} alt="image" />
            <img className="client-img" src={client4} alt="image" />
            <img className="client-img" src={client5} alt="image" />
            <img className="client-img" src={client6} alt="image" />
            <img className="client-img" src={client7} alt="image" />
            <img className="client-img" src={client8} alt="image" />
            <img className="client-img" src={client9} alt="image" />
            <img className="client-img" src={client10} alt="image" />
            <img className="client-img" src={client11} alt="image" />
            <img className="client-img" src={client12} alt="image" />
            <img className="client-img" src={client13} alt="image" />
            <img className="client-img" src={client14} alt="image" />
            <img className="client-img" src={client15} alt="image" />
            <img className="client-img" src={client16} alt="image" />
            <img className="client-img" src={client17} alt="image" />
            <img className="client-img" src={client18} alt="image" />
            <img className="client-img" src={client19} alt="image" />
            <img className="client-img" src={client20} alt="image" />
            <img className="client-img" src={client21} alt="image" />
            <img className="client-img" src={client22} alt="image" />
            <img className="client-img" src={client23} alt="image" />
            <img className="client-img" src={client24} alt="image" />
            <img className="client-img" src={client25} alt="image" />
            <img className="client-img" src={client26} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};
export default CollegeClientele;
