import React, { useState, useEffect } from "react";
import "../assets/css/teesModal.css";
import Tees from "../assets/Images/teesmodalimg.jpg";
import { Link } from "react-router-dom";

const TeesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="tees-modal-overlay">
      <div className="tees-modal">
        <p className="close-icon" onClick={onClose}>
          X
        </p>

        <div className="tees-modal-content">
          <div className="tees-modal-image">
            <img src={Tees} alt="TEES 2023" className="banner-image" style={{paddingTop: '0',}}/>
          </div>
          <div className="tees-modal-text">
{  /*          <h1 style={{ fontFamily: "red-serif", fontSize: "40px" }}>
              {" "}
              TEES <span>2</span>
              <span style={{ color: "red" }}>0</span>
              <span>2</span>
              <span style={{ color: "red" }}>3</span>
            </h1>*/}



            <Link to="https://us06web.zoom.us/meeting/register/tZUoduuvrT0rGNzowFG2ig_qg3QjnQ_P4Fle" target="_blank">
              <button className="register-button" >SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeesModal;
