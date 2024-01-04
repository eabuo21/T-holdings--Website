import React from "react";
import award1 from "../../assets/Images/award1.png";
import award2 from "../../assets/Images/award2.png";
import award3 from "../../assets/Images/award3.png";
import award4 from "../../assets/Images/award4.png";
import award6 from "../../assets/Images/award6.png";
import award7 from "../../assets/Images/award7.png";
import award8 from "../../assets/Images/award8.png";

const AwardSlider = () => {
  return (
    <div>
      <div className="award-slider">
        <div className="award-slider-wrapper">
          <div className="award">
            <img className="award-img" src={award1} alt="award 1" />
          </div>
          <div className="award">
            <img className="award-img" src={award2} alt="award 2" />
          </div>
          <div className="award">
            <img className="award-img" src={award3} alt="award 3" />
          </div>
          <div className="award">
            <img className="award-img" src={award4} alt="award 4" />
          </div>
          <div className="award">
            <img className="award-img" src={award6} alt="award 6" />
          </div>
          <div className="award">
            <img className="award-img" src={award7} alt="award 7" />
          </div>
          <div className="award">
            <img className="award-img" src={award8} alt="award 8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardSlider;
