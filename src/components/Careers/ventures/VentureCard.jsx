import React from "react";
import "../../../assets/css/carreer.css";
import careerplus from "../../../assets/Images/career/careerplus.png";

const VentureCard = ({ title, description, descriptions, link, color }) => {
  return (
    <div className="career-ventures-card2-main">
      <div className="career-ventures-card2-sub-main">
        <div
          style={{
            backgroundColor: color,
            width: "12px",
            height: "250px",
            margin: "0px",
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          }}
        ></div>
        <div className="career-ventures-card2-submain">
          <p className="career-ventures-card2-p">
            <b>{title}</b>
          </p>
          <div className="career-ventures-card2-content">
            <p className="career-ventures-card2-text">
              <span>
                <i class="fa-solid fa-city"></i>
              </span>
              {description}
            </p>
            <p className="career-ventures-card2-text">
              <span>
                <i class="fa fa-light fa-xl fa-map-marker"></i>
              </span>
              {descriptions}
            </p>
            <div className="career-ventures-button-card2">
              <a className="career-ventures-button-card3" href={link}>
                {" "}
                <button className="career-ventures-btn-color2">
                  View Details
                </button>
              </a>
              <span>
                <img src={careerplus} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentureCard;
