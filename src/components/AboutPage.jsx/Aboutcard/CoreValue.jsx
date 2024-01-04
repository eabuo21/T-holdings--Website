import React from "react";
import CoreValueStore from "./CoreValueStore";

function CoreValue() {
  const missionCard1 = [
    {
      title: "Personal Development",
      description1: "Enabling the Physical,",
      description2: "Material Emotional,",
      description3: "Intellectual and Spiritual,",
      description4: "Development of People.",
    },
    {
      title: " Professional Development",
      description1: "Enabling the Brand, Product and ",
      description2: "Business Development of",
      description3: "Organisations.",
      description4: "",
    },
    {
      title: "Public Development",
      description1: "Enabling the Personal, social",
      description2: "Cultural, Economic and",
      description3: "Sustainable Development of",
      description4: "Societies.",
    },
  ];

  return (
    <>
      <div className="main-about-order6-text">
        <div className="about-order6-text">
          <h1 className="core-value-h">Our Core Values</h1>
        </div>
        <div className="about-order6-content d-flex">
          {missionCard1.map((card, index) => (
            <CoreValueStore
              key={index}
              title={card.title}
              description1={card.description1}
              description2={card.description2}
              description3={card.description3}
              description4={card.description4}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CoreValue;
