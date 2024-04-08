import React from "react";
import "../../../assets/css/carreer.css";
import startopen from "../../../assets/Images/career/startopen.png";
import endopen1 from "../../../assets/Images/career/endopen1.png";
import careerbreifcase from "../../../assets/Images/career/careerbreifcase.png";

function OpenRole3() {
  return (
    <>
      <section className="main-open-role">
        <div className="container-open-role" id="public">
          <div className="start-open-role-img">
            <img src={startopen} alt="Tongston" />
          </div>

          <div className="start-open-role-text">
            <h1>PUBLICATIONS INTERN (Full-Time)</h1>
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
            <h3>PUBLICATIONS INTERN Full-Time Intern (Remote)</h3>
            <p>The position requires:</p>

            <h3>Roles and Responsibilities</h3>
            <ul>
              <li>
                Writing, drafting, editing and submitting press releases,
                articles, newsletter submissions, news stories, infographics,
                factsheets, web copy, blogs, books, brochures, catalogues,
                magazines, newspapers, comics, posters, storyboards, press and
                multimedia content, academic journals, papers, articles,
                features, backgrounders, profiles, policy briefs,
                marketing/advertising materials, handbooks, poems, bulletins,
                fictional and non-fictional works etc
              </li>
              <li>
                {" "}
                Copy-editing, proofreading, editing, typesetting and
                illustration of works to be published
              </li>
            </ul>

            <h3>Requirements and Skills </h3>
            <h3>BSc/HND in Communications, literature, or related field </h3>

            <ul>
              <li>At least 2 years’ experience in a similar role</li>
              <li>
                Considerable experience in print and publication management
              </li>
              <li>
                Experience of commissioning copy, and creating and managing
              </li>
              <li>Publishing schedules </li>
              <li>Experience and knowledge of design principles and print </li>
              <li>production methods</li>
              <li>Excellent editorial skills and a strong sense of design</li>
              <li>Excellent copywriting skills</li>
              <li>
                Familiarity with desktop publishing software including
                Photoshop, InDesign and ISSUU
              </li>
              <li>Familiarity with HTML Email management contact systems </li>
              <li>
                Impeccable attention to detail and ability to take ownership of
                accuracy of content
              </li>
              <li>Strong attention to detail</li>
              <li>Self-motivated and takes initiative</li>
              <li>Ability to work both independently and as part of a team </li>
              <li>Possess Entrepreneurial attitude, skills and knowledge </li>
              <li>
                Proficient in the use of Microsoft office tools - PowerPoint
                word and excel
              </li>
              <li>
                Ability to work independently and to manage multiple projects
              </li>
              <li>High integrity, ethics and work standards</li>
              <li>Excellent problem solving and analytical skills </li>
              <li>Excellent written and verbal communication skills </li>
            </ul>

            <h3>Interested and qualified candidates should apply </h3>
          </div>

          <div className="end-open-role-img end-centered-open-role-img">
            <img src={endopen1} alt="" />
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
export default OpenRole3;
