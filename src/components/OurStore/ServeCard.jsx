import React from "react";

const ServeCard = ({ img, heading, text, btnText }) => {
  return (
    <>
      <div className="ourBis-serve-card">
        <img src={img} alt="Card Image" />
        <div className="ourBis-serve-card-content">
          <h5> {heading}</h5>
          <p>{text}</p>
          {/* <button className="">{btnText}</button> */}
        </div>
      </div>
    </>
  );
};

export default ServeCard;
