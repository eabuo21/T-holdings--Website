import React, { useState } from "react";
import AboutSam from "./AbutSam";
import culture1 from "../../assets/images/about/culture1.png";
import culture2 from "../../assets/images/about/culture2.png";
import culture3 from "../../assets/images/about/culture3.png";
import culture4 from "../../assets/images/about/culture4.png";
import culture5 from "../../assets/images/about/culture5.png";
import culture6 from "../../assets/images/about/culture6.png";

function Hidden() {
  const [height, setHeight] = useState(500);
  const handleMouseEnter = () => {
    setHeight(800);
  };

  const handleMouseLeave = () => {
    setHeight(500);
  };
  return (
    <section
      className="about-order7 d-flex"
      style={{ position: "relative", display: "flex" }}
    >
      <h1
        style={{ fontSize: "24px", fontFamily: "open sans", fontWeight: "800" }}
      >
        Our Culture
      </h1>

      <div className="about-order7-img">
        <div className="about-order7-pix1">
          <div className="about-img7-1">
            <AboutSam
              title="Learning and Innovation"
              content="We continuously learn internally and externally to progressively improve the work we and the impact we envision."
              src={culture1}
            />
          </div>
        </div>
        <div className="about-order5-img ">
          <div className="about-img5-1 ">
            <AboutSam
              title="Autonomy & Collaboration"
              content="We encourage a respectable
         flat/non-hierarcial leadership
          management and ownership of
         our tasks-driven workflow."
              src={culture2}
            />
          </div>
          <div className="about-order5-pic">
            <div className="about-order5-pic1 ">
              <AboutSam
                title="Dynamism & Diversity"
                content=" We work with young,
         diverse and resourceful 
         talent seeking the right 
         environment that
         appreciates their
         unique abilities."
                src={culture3}
              />
            </div>
            <div className="about-order5-pic2 ">
              <AboutSam
                title="Corporate & Semi Formal"
                content=" We Strongly abide by 
          industry and regulates
           standards, policies and 
          practice while          
          appearing casual."
                src={culture4}
              />
            </div>
          </div>
          <div className="about-img5-1 ">
            <AboutSam
              title="Ambition & Hard Work"
              content="We think outside the 
          box and set the bar 
          high towards achieving 
          our goals & objectives."
              src={culture5}
            />
          </div>
        </div>
        <div className="about-order7-pix1">
          <div className="about-img7-6 ">
            <AboutSam
              title="Intrapreneurship &  Entrepreneurship"
              content=" We accommodate both intrapreneurship and
      entrepreneurship ideas/ 
      projects/ventures of our
       teams."
              src={culture6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hidden;
