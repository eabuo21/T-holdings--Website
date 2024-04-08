import React from "react";
import "../../assets/css/carreer.css";

const CareerStoreCard = ({ title, description, link }) => {
  return (
    <div className="career-card-main-content">
      <div className="career-card1-main">
        <p className="career-card1-p">{title}</p>
        <div className="career-card-content">
          <p className="career-card1-text">{description}</p>
        </div>
      </div>
      <div className="career-button-card">
        <button className="career-btn-color">
          <a href={link}>Explore</a>
        </button>
      </div>
    </div>
  );
};

export default CareerStoreCard;
