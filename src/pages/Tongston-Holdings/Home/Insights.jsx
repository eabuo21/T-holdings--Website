/** @format */

import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import "../../../assets/css/insights.css";
import mobileXR from "../../../assets/Images/mobileXR.png";
import growthBis from "../../../assets/Images/growthBis.png";
import careerGoals from "../../../assets/Images/in-careerGoals.png";
import arrowRight from "../../../assets/Icons/arrowRight.svg";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import MailingList from "../../../components/MailingList";
import Footer from "../../../components/footer";
import Teem24 from "../../../components/TeemModal";
import Magazine from "../../../assets/files/Teem 2024_.pdf";
import "../../../assets/css/Teem.css";

// initialize google analytics
ReactGA.initialize("437299185");

const Insights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  //handle the modal the displays the teem magazine on the website with an iframe element

  const [showteem, setShowTem] = useState(false);
  const handleOpenTeem = () => {
    setShowTem(true);
  };
  const handleCloseTeem = () => {
    setShowTem(false);
  };

  return (
    <>
      <Header />
      <main>
        <section className="insights-container">
          <div
            className="insights-text-con"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <h1>Value, Influence & Profitability At Your Fingertips! </h1>
            <button
              onClick={() => handleOpenTeem()}
              className="modal-button "
              style={{
                background: "red",
                width: "40vh",
                padding: "1rem",
                borderRadius: "20px",
                color: "white",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "20px",
              }}
            >
              Explore TEEM 2024
            </button>
            {showteem && <Teem24 onClose={() => handleCloseTeem()} />}
          </div>
        </section>
        {/* body section */}
        <section className="insight-body-con">
          <h1 className="insight-body-heading">LATEST</h1>

          {/*teem magazine post section  */}
          <h1 className="teem-heading">TEEM 2024 Highlights</h1>
          <div className="teem-magazine-post-section-container">
            <iframe
              className="teem-video"
              width="400px"
              height="370px"
              src="https://www.youtube.com/embed/1-SJpZrzG2U?si=ONu0zJyj2gGG5_SI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <section className="contents-container-teem">
              <h2 className="teem-post-heading">
                2024 Tongston Entrepreneurial Education Magazine (#TEEM24) IS
                HERE! GRAB A COPY NOW!
              </h2>
              <h4 className="second-post-heading-teem">
                The long-awaited Tongston Entrepreneurial Education Magazine
                (#TEEM24) is here!
              </h4>
              <div className="teem-text-container-post">
                <p
                  className="teem-post-first-text-content"
                  style={{
                    marginLeft: "1rem",
                  }}
                >
                  Dive into a wealth of knowledge and insights curated just for
                  you across enterprise, finance, media and education. Learn
                  more about Tongston’s unique product suite for people,
                  individuals and governments globally across technology,
                  finance, media, education, data & research and more.
                </p>
                <p
                  className="second-text-teem-pos-section "
                  style={{
                    marginLeft: "1rem",
                  }}
                >
                  Our cover story includes highlights from industry leaders
                  across media, education, enterprise and finance:
                </p>
                {/* this is the section that contains the list for the teem-board-members */}
                <ul className="tdlegates-list">
                  <li className="lists-names">
                    {" "}
                    Alh. Hassan Usman [Enterprise]{" "}
                  </li>
                  <li className="lists-names"> Mr. Kamri Apollo [Media]</li>
                  <li className="lists-names">
                    {" "}
                    Ms. Halima Ibrahim Abba [Finance]
                  </li>
                  <li className="lists-names"> Dr. Lukman Raimi [Education]</li>
                </ul>
              </div>
            </section>
            <div
              className="download-magazine-section"
              style={{
                width: "auto",
              }}
            >
              <h5 className="call-action-text-teem">Want to Grab a Copy? </h5>
              <a href={Magazine} download className="teem-download-link">
                <button className="teem-download-button">click Here</button>{" "}
              </a>
            </div>
          </div>

          <div className="insight-latest-card">
            <div>
              <img
                src={mobileXR}
                alt="latest-blog"
                className="insight-latest-card-img"
              />
            </div>
            <div className="insight-latest-card-text">
              <h3>TECHNOLOGY</h3>
              {/* <a
                href="https://tongston.com/from-sci-fi-to-reality-how-mobile-xr-is-reshaping-digital-experiences/"
                target="_blank"
                rel="noreferrer"
              > */}
              <h1 style={{ textDecoration: "underline" }}>
                From Sci-Fi to Reality: How Mobile XR is Reshaping Digital
                Experiences
              </h1>
              {/* </a> */}
              <p>
                In recent years, the world of technology has witnessed
                unprecedented advancements, pushing the boundaries of what was
                once considered science fiction. One such remarkable innovation
                is Extended Reality (XR), a fusion of virtual reality (VR),
                augmented reality (AR), and mixed reality (MR).
              </p>
              {/* <a
                href="https://tongston.com/from-sci-fi-to-reality-how-mobile-xr-is-reshaping-digital-experiences/"
                target="_blank"
                rel="noreferrer"
              > */}
              {/* <button className="insights-button1">READ</button> */}
              {/* </a> */}
            </div>
          </div>
          <div>
            {/* <p>
              {" "}
              To read more articles, visit our
               <a href="https://tongston.com/blog" target="_blank"> 
              &nbsp;
              <span className="text-red">
                BLOG
                <img
                  src={arrowRight}
                  alt=""
                  style={{ paddingLeft: "3px" }}
                />{" "}
              </span>{" "}
               </a> 
            </p> */}
          </div>

          {/* Discover Exciting Events Near You!*/}
          <div>
            <h1 className="insight-body-heading">
              Discover Exciting Events Near You!
            </h1>
            <div className="discovery-container">
              <div className="insights-text-con">
                <Link to="/events">
                  <button className="insights-disBtn">Take Me There</button>
                </Link>
              </div>
            </div>

            {/* Recent Post*/}
            <div style={{ marginTop: "10px" }}>
              <h1 className="insight-body-heading">Recent Posts</h1>
            </div>

            <div className="insight-recent-post">
              <div className="insight-post-left">
                <div className="insight-recent-post-card">
                  <div>
                    {/* <a
                      href="https://tongston.com/the-power-of-personal-branding-unleashing-your-authenticity-for-professional-success/"
                      target="_blank"
                      rel="noreferrer"
                    > */}
                    <img
                      src={careerGoals}
                      alt="latest-blog"
                      className="insight-recent-post-card-img1"
                    />
                    <div className="insight-recent-post-card-text">
                      <span>Event</span>
                      <h3>Execute your Career Goals</h3>
                    </div>
                    {/* </a> */}
                  </div>
                </div>
              </div>
              <div className="insight-post-right">
                <div className="insight-recent-post-card">
                  {/* <a
                    href="https://tongston.com/from-sci-fi-to-reality-how-mobile-xr-is-reshaping-digital-experiences/"
                    target="_blank"
                    rel="noreferrer"
                  > */}
                  <div>
                    <img
                      src={mobileXR}
                      alt="latest-blog"
                      className="insight-recent-post-card-img2"
                    />
                    <div className="insight-recent-post-card-text">
                      {" "}
                      <span>Event</span>
                      <h3>
                        From Sci-Fi to Reality: How Mobile XR is <br />
                        Reshaping Digital Experiences
                      </h3>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
                <div className="insight-recent-post-card">
                  {/* <a
                    href="https://tongston.com/5-essential-strategies-for-small-business-growth-insights-from-a-business-consulting-expert/"
                    target="_blank"
                    rel="noreferrer"
                  > */}
                  <div>
                    <img
                      src={growthBis}
                      alt="latest-blog"
                      className="insight-recent-post-card-img2"
                    />
                    <div className="insight-recent-post-card-text">
                      <span>Event</span>
                      <h3>
                        5 Essential Strategies for Small Business Growth: <br />
                        Insights from a Business Consulting Expert
                      </h3>
                    </div>
                  </div>
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        <MailingList />
      </main>
      <Footer />
    </>
  );
};

export default Insights;
