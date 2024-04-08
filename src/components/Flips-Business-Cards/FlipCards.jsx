import React from "react";
import FlipMarkup from "../../components/Flips-Business-Cards/Flipmarkup";
import hat from "../../assets/Icons/hat.svg";
import finance from "../../assets/Icons/finance.svg";
import media from "../../assets/Icons/media.svg";
import card1 from "../../assets/Images/busCard1.png";
import card2 from "../../assets/Images/busCard2.png";
import card3 from "../../assets/Images/busCard3.png";
import card4 from "../../assets/Images/busCard4.png";
import card5 from "../../assets/Images/businessCard5.png";
import InstituteBrochure from "../../assets/files/_T INSTITUTE TRAINING_BROCHURE December 2023.pptx.pdf";
import Mediabrochure from "../../assets/files/Tongston Entreprenuership Media Brochure.pdf";
import holdings from "../../assets/files/LONG FORM - CONSOLIDATED TONGSTON BROCHURE.pptx.pdf";

function FlipCards() {
  const Cards = [
    {
      front: card3,
      heading: "TONGSTON INSTITUTE",
      text: "Entrepreneurial Education",
      icon: hat,
      link: "/TongstonInstitute",
      file: InstituteBrochure,
    },

    {
      front: card5,
      heading: "TONGSTON COLLEGE",
      text: "Entrepreneurial Education",
      icon: hat,
      link: "/TongstonCollege",
    },

    {
      front: card2,
      heading: "TONGSTON VENTURES",
      text: "Finance",
      icon: finance,
      file: InstituteBrochure,
      link: "https://t-ventures.tongston.com/",
    },

    {
      front: card1,
      heading: "TONGSTON MEDIA ",
      text: "Media",
      icon: media,
      file: InstituteBrochure,
      link: "https://t-hub.tongston.com/media",
      file: Mediabrochure,
    },

    {
      front: card4,
      heading: "TONGSTON HOLDINGS",
      text: "Enterprise",
      icon: hat,
      file: InstituteBrochure,
      link: "/TongstonHoldings",
      file: holdings,
    },
  ];

  return (
    <div className=" flex-container-items   ">
      {Cards.map((card, index) => (
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in-linear"
          data-aos-duration="3000"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
          data-aos-once="true"
          key={index}
          className="normalize-items "
        >
          <FlipMarkup
            front={card.front}
            heading={card.heading}
            text={card.text}
            icon={card.icon}
            back1={card.back1}
            link={card.link}
            back2={card.back2}
            back3={card.back3}
            back4={card.back4}
            back5={card.back5}
            back6={card.back6}
            file={card.file}
          />
        </div>
      ))}
    </div>
  );
}
export default FlipCards;
