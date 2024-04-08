import React from "react";
import "../../../assets/css/carreer.css";
import startopen from "../../../assets/Images/career/startopen.png";
import endopen1 from "../../../assets/Images/career/endopen1.png";
import careerbreifcase from "../../../assets/Images/career/careerbreifcase.png";

function OpenRole2() {
  return (
    <>
      <section className="main-open-role">
        <div className="container-open-role" id="policy">
          <div className="start-open-role-img">
            <img src={startopen} alt="Tongston" />
          </div>

          <div className="start-open-role-text">
            <h1>LEGAL POLICY REGULATORY AND GOVERNANCE INTERN</h1>
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
            <h3>LEGAL POLICY REGULATORY AND GOVERNANCE INTERN</h3>

            <h3>Roles and Responsibilities</h3>
            <ul>
              <li>
                Monitoring and/or advising on all legal matters, commercial
                contracts, and agreements
              </li>
              <li>
                Drafting corporate agreements and handling company secretarial
                duties{" "}
              </li>
              <li>
                Ensuring the company complies with the statutory and corporate
                governance practices and guidelines as applicable
              </li>
              <li>Managing intellectual property filings</li>
              <li>Managing interfaces with external counsel</li>
            </ul>

            <h3>Requirements and Skills </h3>
            <ul>
              <li>
                At least 2 years’ experience in a law firm focused on commercial
                and contract law LLB in law or equivalent legal qualification
              </li>
              <li>
                Relevant legal qualifications, either solicitor, barrister or
                CILEX
              </li>
              <li>
                Strong legal experience in corporate and commercial matters
              </li>
              <li>Excellent contractual drafting skills </li>
              <li>Experience handling corporate secretariat matters</li>
              <li> Strong attention to detail</li>
              <li>Self-motivated and takes initiative </li>
              <li>Ability to work both independently and as part of a team</li>
              <li>Possess Entrepreneurial attitude, skills and knowledge </li>
              <li>
                {" "}
                Proficient in the use of Microsoft office tools - PowerPoint
                word and excel
              </li>
              <li>
                Ability to work independently and to manage multiple projects
              </li>
              <li>
                High integrity, ethics and work standardsExcellent problem
                solving and analytical skills{" "}
              </li>
              <li>Excellent written and verbal communication skills </li>
            </ul>

            <h3> Interested and qualified candidates should apply</h3>
          </div>

          <div className="end-open-role-img end-centered-open-role-img">
            <img src={endopen1} alt="Tongston" />
            <div className="end-centered-role-button">
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
export default OpenRole2;
