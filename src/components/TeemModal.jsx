import React from "react";
import "../assets/css/3D  Scale/3D-Scale.css";
import PPP from "../assets/files/Teem 2024_.pdf";
const PriModal = ({ onClose }) => {
  return (
    <>
      <div
        className="mainmo-wrapper"
        style={{
          inset: "0",
          position: "fixed",
          zIndex: "999",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
            background: "transparent",
          top: '5rem',
        }}
      >
        <div
          className="items-container"
          style={{
            inset: "0",
            position: "absolute",
            background: "grey",
            height: "auto",
              width: "auto",
            boxShadow:  'inherit',
            opacity: '1'
          }}
        >
          <button
            onClick={() => onClose()}
            className="close-button"
            style={{
              color: "white",
              fontSize: "40px",
              marginLeft: "auto",
              fontWeight: "bold",
              marginRight: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "red",
              borderRadius: "20px",
              border: "none",
            }}
          >
            &times;
          </button>
          <iframe
            width="100%"
            height="500"
            src={PPP}
            className="embeded-pdf"
            link rel="noreferrer noopener "
            style={{ position: "relative", paddingBottom: "4rem" }}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default PriModal;
