import React from "react";
import "../../../assets/css/carreer.css";
import startopen from "../../../assets/Images/career/startopen.png";
import endopen1 from "../../../assets/Images/career/endopen1.png";
import careerbreifcase from "../../../assets/Images/career/careerbreifcase.png";

function OpenRoleVetures() {
  return (
    <>
      <section className="main-open-role">
        <div className="container-open-role" id="ventures">
          <div className="start-open-role-img">
            <img src={startopen} alt="Tongston" />
          </div>

          <div className="start-open-role-text">
            <h1>TONGSTON VENTURES INTERN</h1>
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
                <a href="">Apply</a>
              </button>
              <button className="open-role-button2">
                <a href="">Save</a>
              </button>
            </div>
            <h3>TONGSTON VENTURES INTERN</h3>
            <p>
              You will have the opportunity to play key roles in the
              origination, business development, execution, portfolio management
              and overall management of Tongston’s investment activities in
              entrepreneurs and intrapreneurs across various sectors.
            </p>
            <h3>Roles and Responsibilities</h3>
            <ul>
              <li>Screening and reviewing investment opportunities</li>
              <li>
                Carrying out the due diligence process; and conducting financial
                analysis and modelling of investment opportunities{" "}
              </li>
              <li>
                Preparing Investment Memos to present to the Investment
                Committee
              </li>
              <li>Conducting industry, market and investment research</li>
              <li>Product development and implementation</li>
              <li> Development of pitch books and presentations </li>
              <li>
                Identifying potential exit strategies for existing investments,
                including selling assets to other investors
              </li>
              <li>
                Implementation of investment policy, investment review and due
                diligence tools for efficient identification, processing, and
                management of businesses or supporting intrapreneurs
              </li>
              <li>Monitor investments and prepare regular reports </li>
            </ul>

            <h3>Requirements and Skills </h3>
            <ul>
              <li>
                A strong first degree in engineering, economics, finance,
                sciences, accounting, or other relevant degree from a recognised
                university
              </li>
              <li>
                Additional relevant qualifications such an MBA or MSc. (could be
                in view) in a relevant field will be an advantage
              </li>
              <li>
                Relevant certifications related to finance will be helpful
              </li>
              <li>
                At least 6 months’ experience in a private equity/venture
                capital investment fund, an investment bank/firm, a management
                consultancy, a business development firm, or an audit firm is
                advantageous{" "}
              </li>
              <li>
                At least 6 months of hands-on business development/advisory
                skills and experience is advantageous{" "}
              </li>
            </ul>
          </div>

          <div className=" end-open-role-img end-centered-open-role-img">
            <img src={endopen1} alt="btn" />
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
export default OpenRoleVetures;
