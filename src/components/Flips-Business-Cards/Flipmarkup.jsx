import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import CardFlip from "react-card-flip";
import "../../assets/css/flips.css";

const FlipCard = ({
  front,
  heading,
  text,
  icon,
  back1,
  back2,
  back3,
  back4,
  back5,
  back6,
  link,
  file,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
    setLoading(false);
  };

  return (
    <>
      <CardFlip
        className="card-flip-items"
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedFrontToBack={2}
        flipSpeedBackToFront={2}
        flipOnHover={true}
        wrapperStyle={{ border: "1px solid #ccc" }}
        frontStyle={{ backgroundColor: "gold" }}
        backStyle={{ backgroundColor: "gold" }}
        perspective={2000}
        clickAction="click"
      >
        {/* card front */}
        <div onClick={handleCardFlip} className="business-card">
          <div className="" style={{ zIndex: "1", textAlign: "center" }}>
            <h3>{heading}</h3>
            <p>{text}</p>

            <img className="bus-card-icon" src={icon} alt="icons" />
          <text className="arrow-down" style={{color: 'white',}}>  &darr;</text>
          </div>

          <img src={front} alt="bck-image" className="bus-card-img" />
        </div>

        {/* back of th cards*/}
        <div onClick={handleCardFlip} className="back-card ">
          <div
            className="main-box"
            style={{
              display: "flex",
              flexDirection: "row",
              rowGap: "6px",
              WebkitJustifyContent: "space-around",
              WebkitAlignItems: "flex-start",
            }}
          ></div>
          {/*end of boxed container*/}

          <button className="view-button-pages">
            <RouterLink to={link}>Learn More</RouterLink>
          </button>
          <a href={file} download>
            {" "}
            <button className="view-button-pages">
              {loading ? <b>downloading....</b> : <b> Download Brochure </b>}
            </button>
          </a>
           <text className="arrow-up" style={{color: 'white',}}>  &uarr;</text>
        </div>
      </CardFlip>
    </>
  );
};

export default FlipCard;
