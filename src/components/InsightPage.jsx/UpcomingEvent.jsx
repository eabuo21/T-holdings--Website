import React, { useState } from "react";
import "../../assets/css/events.css";
import tees23 from "../../assets/Images/tees2023.jpg";
import dataCourse from "../../assets/Images/dataCourse.jpg";

const UpcomingEvent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="event-tab-container">
      <div className="event-tab-header">
        <div
          className={`event-tab-item ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          VIRTUAL EVENT{" "}
        </div>
        <div className="vl"></div>
        <div
          className={`event-tab-item ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          IN-PERSON EVENT{" "}
        </div>
      </div>
      <div className="event-tab-content">
        {activeTab === 1 && (
          <div className="ev-card slide-in">
            <div className="events-latest-card">
              <div className="events-latest-card-img">
                <img className="pastImgBg" src={tees23} alt="events" />
              </div>
              <div className="events-latest-card-text">
                <button className="events-button">virtual</button>
                <h1>Welcome to TEES 2023</h1>
                <p>Attend TEES 2023 as a delegate and look forward to ...</p>

                <div className="event-scheduling">
                  <p className="events-date">
                    <span>
                      <b>DATE: </b>
                    </span>
                    9th December. 2023{" "}
                  </p>
                  <p className="events-time">
                    <span>
                      <b>TIME: </b>
                    </span>
                    9:00 AM WAT
                  </p>
                  <p className="events-location">
                    <span>
                      <b>LOCATION: </b>
                    </span>
                    Zoom{" "}
                  </p>
                </div>
                {/* <a href="https://us06web.zoom.us/meeting/register/tZUoduuvrT0rGNzowFG2ig_qg3QjnQ_P4Fle#/registration" target="_blank">
                  <button className="events-button3">REGISTER</button>
                </a> */}
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="ev-card slide-in">
            <div className="events-latest-card">
              <div className="events-latest-card-img">
                <img className="pastImgBg" src={dataCourse} alt="Events" />
              </div>
              <div className="events-latest-card-text">
                <button className="events-button">onsite</button>
                <h1>Data Analysis Crash Course Event</h1>
                <p>
                  Learn Descriptive Data Analysis, Excel, and Tableau Skills in
                  4 hours!{" "}
                </p>

                <div className="event-scheduling">
                  <p className="events-date">
                    <span>
                      <b>DATE: </b>
                    </span>
                    30th September 2023{" "}
                  </p>
                  <p className="events-time">
                    <span>
                      <b>TIME: </b>
                    </span>
                    10:00 AM WAT
                  </p>
                  <p className="events-location">
                    <span>
                      <b>LOCATION: </b>
                    </span>
                    No 16 Emeka Anyaku Street, Area 11, Abuja{" "}
                  </p>
                </div>
                <a href="https://tongston.selar.co/29r312" target="_blank">
                  <button className="events-button3">REGISTER</button>
                </a>
              </div>
              {/* <div className="events-latest-card-text">
                <button className="events-button">IN PERSON EVENT</button>
                <h1 style={{ top: "3rem", position: "relative", left: "0" }}>
                  THERE ARE NO IN PERSON INVENTS AT THE MOMENT, PLEASE STAY
                  TUNED{" "}
                </h1>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvent;
