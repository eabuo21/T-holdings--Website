import React from "react";
import "../../../assets/css/carreer.css";
import startopen from "../../../assets/Images/career/startopen.png";
import endopen1 from "../../../assets/Images/career/endopen1.png";
import careerbreifcase from "../../../assets/Images/career/careerbreifcase.png";

function OpenRole4() {
  return (
    <>
      <section className="main-open-role">
        <div className="container-open-role" id="brand">
          <div className="start-open-role-img">
            <img src={startopen} alt="" />
          </div>

          <div className="start-open-role-text">
            <h1>BRANDING, COMMUNICATIONS, PR AND MARKETING INTERN</h1>
            <h3>
              Tongstons Ventures - Abuja, NG (Remote)
              <span className="start-open-role-span">
                {" "}
                1 day ago. 158 applicants{" "}
              </span>
            </h3>
            <h3 className="start-open-role-fulltime">
              <span>
                <img src={careerbreifcase} alt="" />
              </span>{" "}
              Full-time - Entry level
            </h3>
            <div className="open-role-button">
              <button className="open-role-button1">
                <a target="_blank" href="">
                  Apply
                </a>
              </button>
              <button className="open-role-button2">
                <a target="_blank" href="">
                  Save
                </a>
              </button>
            </div>
            <h3>
              BRANDING, COMMUNICATIONS, PR AND MARKETING INTERN Full-Time Intern
              (Remote)
            </h3>

            <h3>Roles and Responsibilities</h3>
            <h3>The position requires:</h3>
            <ul>
              <li>
                Branding work (brand strategy, designing brand collateral etc.)
              </li>
              <li>
                Building and managing relationships with media professionals and
                other key stakeholders{" "}
              </li>
              <li>Writing communiques and press releases</li>
              <li>Developing and disseminating communication materials</li>
              <li>
                {" "}
                Managing memberships, endorsements & accreditations for Tongston
              </li>
              <li>
                {" "}
                Developing content, writing scripts and running advertising and
                marketing campaigns on TV, radio and newspaper{" "}
              </li>
              <li>Events management </li>
            </ul>

            <h3>Requirements and Skills </h3>
            <ul>
              <li>
                Bachelor Degree in Communications, PR/Marketing or related
                disciplines
              </li>
              <li>At least 2 years’ experience in a similar role</li>
              <li>Ability to multi-task with tight turn-around/timelines</li>
              <li>Experience with branding, marketing, media, press</li>
              <li>
                Passion for generating publicity and promotion through social
                media and other media channels
              </li>
              <li> High integrity, ethics and work standard</li>
              <li>
                Proficiency in Microsoft Office Suite and related digital
                PR/marketing tools
              </li>
              <li>
                Proven ability to develop brand and marketing strategies and
                communicate recommendations to executives
              </li>
              <li>
                Experience in identifying target audiences and devising
                effective campaigns
              </li>
              <li>Excellent understanding of the full marketing mix</li>
              <li>Data-driven thinking and an affinity for numbers</li>
              <li>
                {" "}
                Up-to-date with latest trends and marketing best practices
              </li>
              <li>Strong attention to detail</li>
              <li>Self-motivated and takes initiative</li>
              <li>Ability to work both independently and as part of a team </li>
              <li>Possess Entrepreneurial attitude, skills and knowledge </li>
              <li>
                Ability to work independently and to manage multiple projects{" "}
              </li>
              <li>Excellent problem solving and analytical skills</li>
              <li> Excellent written and verbal communication skills </li>
            </ul>

            <h3>Interested and qualified candidates should apply</h3>
          </div>

          <div className=" end-open-role-img end-centered-open-role-img">
            <img src={endopen1} alt="" />
            <div className=" end-centered-role-button">
              <button>
                {" "}
                <a target="_blank" href="">
                  Apply Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default OpenRole4;
