import React, { useEffect } from "react";
import "../../../assets/css/insights.css";
import mobileXR from "../../../assets/Images/mobileXR.png";
import growthBis from "../../../assets/Images/growthBis.png";
import careerGoals from "../../../assets/Images/in-careerGoals.png";
import arrowRight from "../../../assets/Icons/arrowRight.svg";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import MailingList from "../../../components/MailingList";
import Footer from "../../../components/footer";
const Insights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="insights-container">
          <div className="insights-text-con">
            <h1>Value, Influence & Profitability At Your Fingertips! </h1>
          </div>
        </section>
        {/* body section */}
        <section className="insight-body-con">
          <h1 className="insight-body-heading">LATEST</h1>
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
