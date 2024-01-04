import React from "react";

const BusinessCard = ({ heading, text, icon, background }) => {
  return (
    <div className="business-card">
      <div style={{ zIndex: 1, textAlign: "center" }}>
        <h3>{heading}</h3>
        <p>{text}</p>

        <img className="bus-card-icon" src={icon} alt="icons" />
      </div>
      <img src={background} alt="bck-image" className="bus-card-img" />
    </div>
  );
};

export default BusinessCard;
