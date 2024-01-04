import React from "react";
import partner1 from "../../assets/Images/partner1.png";
import partner2 from "../../assets/Images/partner2.png";
import partner3 from "../../assets/Images/partner3.png";
import partner4 from "../../assets/Images/partner4.png";
import partner5 from "../../assets/Images/partner5.png";
import partner6 from "../../assets/Images/partner6.png";
import partner7 from "../../assets/Images/partner7.png";
import partner8 from "../../assets/Images/partner8.png";
import partner9 from "../../assets/Images/partner9.png";
import partner10 from "../../assets/Images/partner10.png";

const PartnerSlider = () => {
  return (
    <div>
      <div className="partner-slider">
        <div className="partner-slider-wrapper">
          <div className="partner">
            <img className="partner-img" src={partner1} alt="partner's logo" />
          </div>
          <div className="partner">
            <img className="partner-img" src={partner2} alt="partner's logo" />
          </div>
          <div className="partner">
            <img className="partner-img" src={partner3} alt="partner's logo" />
          </div>
          <div className="partner"></div>
          <div className="partner">
            <img className="partner-img" src={partner4} alt="partner's logo" />
          </div>
          <div className="partner">
            <img className="partner-img" src={partner5} alt="partner's logo" />
          </div>
          <div className="partner">
            <img className="partner-img" src={partner6} alt="partner's logo" />
          </div>
          <div className="partner">
            <img className="partner-img" src={partner7} alt="partner's logo" />
          </div>
          <div className="partner">
            <img className="partner-img" src={partner8} alt="partner's logo" />
          </div>
          <div className="partner">
            <img className="partner-img" src={partner9} alt="partner's logo" />
          </div>
          <div className="partner">
            <img className="partner-img" src={partner10} alt="partner's logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;
