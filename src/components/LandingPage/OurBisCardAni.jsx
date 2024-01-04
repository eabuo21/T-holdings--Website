import React from "react";
import BusinessCard from "./BusinessCard";
import { Link as ScrollLink } from "react-router-dom";
import hat from "../../assets/Icons/hat.svg";
import finance from "../../assets/Icons/finance.svg";
import media from "../../assets/Icons/media.svg";
import card1 from "../../assets/Images/busCard1.png";
import card2 from "../../assets/Images/busCard2.png";
import card3 from "../../assets/Images/busCard3.png";
import card4 from "../../assets/Images/busCard4.png";
import card5 from "../../assets/Images/businessCard5.png";

const OurBisCardAni = () => {
  return (
    <div
      className="bis-carAni"
      style={{
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        flexWrap: "nowrap",
      }}
    >
      <ScrollLink
        to="/TongstonInstitute"
        smooth={true}
        spy={true}
        duration={500}
      >
        <BusinessCard
          heading="TONGSTON INSTITUTE"
          text="Entrepreneurial Education"
          icon={hat}
          background={card3}
        />
      </ScrollLink>

      <ScrollLink
        to={"/TongstonCollege"}
        smooth={true}
        spy={true}
        duration={500}
      >
        <BusinessCard
          heading="TONGSTON COLLEGE"
          text="Entrepreneurial Education"
          icon={hat}
          background={card5}
        />
      </ScrollLink>

      <ScrollLink
        to={"https://t-ventures.tongston.com"}
        smooth={true}
        spy={true}
        duration={500}
      >
        <BusinessCard
          heading="TONGSTON VENTURES"
          text="Finance"
          icon={finance}
          background={card2}
        />
      </ScrollLink>

      <ScrollLink to={"https://t-hub.tongston.com/media"} smooth={true} spy={true} duration={500}>
        <BusinessCard
          heading="TONGSTON MEDIA"
          text="Media"
          icon={media}
          background={card1}
        />
      </ScrollLink>

      <ScrollLink to={"/TongstonHoldings"} smooth={true} spy={true} duration={500}>
        <BusinessCard
          heading="TONGSTON HOLDINGS"
          text="Enterprise"
          icon={hat}
          background={card4}
        />
      </ScrollLink>
    </div>
  );
};

export default OurBisCardAni;
