import React from "react";
import MissionCardStore from "./missionCardStore";

function MissionCard() {
  const missionCard1 = [
    {
      title: "Our Vision",
      description1:"",
      description2:"",
      description: "A world where there is no unemployment, employability,underemployment, and overdependence on government for socio-economic development.",
      avater: "https://res.cloudinary.com/de5sm2jjl/image/upload/v1680970892/TONGSTONG/ezgif.com-crop-6_fuvm1d.png",
    },
    {
      title: " Our Mission",
      description:" To transform people,",
      description1:"organizations and ",
      description2:"governments into entrepreneurial entities.",
      avater: "https://res.cloudinary.com/de5sm2jjl/image/upload/v1680970883/TONGSTONG/ezgif.com-crop-8_ud8let.png",
    },
    
  ];

  return (
    <div className="about-order3-content">
      {missionCard1.map((card, index) => (
        <MissionCardStore
          key={index}
          title={card.title}
          description={card.description}
          description1={card.description1}
          description2={card.description2}
          avater={card.avater}
        />
      ))}
    </div>
  );
}

export default MissionCard;
