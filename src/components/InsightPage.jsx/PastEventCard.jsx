import React from "react";
import arrowRight from "../../assets/Icons/arrowRight.svg";

const PastEventCard = ({
  PBtn,
  date,
  header,
  location,
  // time,
  eventLink,
  image,
}) => {
  return (
    <div className="pastEvents-card">
      <button className="events-button">{PBtn}</button>
      <h5 className="pastEvents-card-text">{header}</h5>
      <div>
        <span className="pastEvents-scheduling">LOCATION: </span>
        <p
          className="pastEvents-card-location"
          style={{ height: "auto", lineHeight: "2rem" }}
        >
          {location}
        </p>
        <p className="pastEvents-card-date">
          <span className="pastEvents-scheduling">DATE:</span> {date}
        </p>
        {/* <p className="pastEvents-card-time">
          <span className="pastEvents-scheduling">TIME:</span>
          {time}
        </p> */}
      </div>
      <div style={{ paddingTop: "10px" }}>
        <span className="text-red">
          <a href={eventLink} target="_blank" className="event-link">
            {" "}
            <b> VIEW EVENT</b>
            <img src={arrowRight} alt="" style={{ paddingLeft: "3px" }} />
          </a>
        </span>
      </div>
      {/* circle */}
      <div>
        <div className="pastEvent-circle-con">
          <img src={image} className="pastEvent-circle" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PastEventCard;
