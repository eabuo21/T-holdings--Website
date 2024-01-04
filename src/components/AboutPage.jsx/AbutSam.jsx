import React, { useState } from "react";

function AboutSam(props) {
  const [display, setDisplay] = useState(false);
  const onEnter = () => setDisplay(true);
  const onLeave = () => setDisplay(false);

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="about-img7-1 container-img7-hover"
      id="container-img7-text"
    >
      <div className="our-culture-img">
        <img className="" src={props.src} alt="Tongston" />
      </div>
      {display && (
        <div className="centered ">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      )}
    </div>
  );
}

export default AboutSam;
