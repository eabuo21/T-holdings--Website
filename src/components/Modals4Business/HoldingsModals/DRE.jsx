import React from "react";

const IT = ({ onClose }) => {
  return (
    <>
      <div
        className=" modal-overlay"
        style={{
          inset: "0",
          position: "fixed",
          width: "100%",
          height: "100%",
          opacity: "1.4rem",
          background: "black",
        }}
      >
        {/* some styling goes here  */}
        <div
          className="modal-container"
          style={{
            background: "gray",
            opacity: "0.5rem",
            position: "absolute",
            borderRadius: "12pd",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <button
            onClick={onclose}
            className="modal-close-button "
            style={{
              color: "red",
              fontsize: "30px",
              fontWeight: "700",
              background: "black",
              opacity: "1.2rem",
            }}
          >
            &times;
          </button>
          {/*  some stylaing goes here  */}
          <div className="slider-container-section ">
            {/*  some styling goes here as well  */}
          </div>
        </div>
      </div>
    </>
  );
};
export default IT;
