import React, { useState, useEffect } from "react";
import "../../assets/css/carreer.css";
import { Link } from "react-router-dom";

const OpenCard = ({ title, description, text, descriptions, link, color }) => {
  return (
    <div className="career-card2-main">
      <div
        className="different-color-role-div"
        style={{ backgroundColor: color }}
      ></div>
      <div className="career-card2-sub-main">
        <p className="career-card2-p">
          <b>{title}</b>
        </p>
        <div className="career-card2-content">
          <p className="career-card2-text">
            <span>
              <i className="fa-solid fa-city"></i>
            </span>
            {description}
          </p>
          <p className="career-card2-text" style={{ paddingLeft: "1rem" }}>
            <span></span>
            {text}
          </p>
          <p className="career-card2-text">
            <span>
              <i className="fa fa-light fa-xl fa-map-marker"></i>
            </span>
            {descriptions}
          </p>
          <div className="career-button-card2 ">
            <Link to={link} target="_blank">
              <button className="career-btn-color2"> Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenCard;
