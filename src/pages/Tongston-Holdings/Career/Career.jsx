/** @format */

import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "../../../assets/css/carreer.css";
import "../../../assets/css/3D  Scale/3D-Scale.css";
import armstongston from "../../../assets/Images/career/armstongston.png";
import CareerCard1 from "../../../components/Careers/CareerCard1";
import AccordionCareer from "../../../components/Careers/AccordionCareer";
import OpenCardRule from "../../../components/Careers/OpenCardRule";
import Header from "../../../components/Header";
import Footer from "../../../components/footer";
import OurDivisions from "../../../components/OurDivisions";
import CareerTransitionText from "../../../components/CareerTransitionText";
import { Link } from "react-router-dom";
import ApplicationProcess from "../../../components/ApplicationProcess";
import ReactPlayer from "react-player";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../../components/Notification/Notification";
import Appbg from "../../../assets/Images/career/AppimgBg.png";
import { Helmet } from "react-helmet";

const Career = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // send email using emailjs
    const templateParams = {
      name: name,
      email: email,
    };

    emailjs
      .send(
        "service_z3uzwhg",
        "template_yr5bezo",
        templateParams,

        "CDmJ3huYpinZb0wEA"
      )
      .then((response) => {
        showSuccessNotification("Request sent successfully!");
        setLoading(false);
        setName("");
        setEmail("");
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("Error sending request!");
      });
  };

  // const PrimaryKeywords =
  //   "tongston entrepreneurship group, entrepreneurial education, enterprise development,business consulting, financial services, legal services, public relations, data and research, online events management";
  // //secondary keywords goes here

  // const SecondaryKeywords =
  //   "startups,SMEs, Africa, Nigeria, investment, growth, innovation, impact, sustainability, branding, ";
  // //long-tail keywords goes here

  // const Longtailkeywords =
  //   "entrepreneurial education programs in nigeria, business consulting services for startups in africa, financial services for small and medium enterprises, legal compliance for businesses in nigeria,  public relations for entrepreneurs, data analysis for businesses, online events management platform";

  return (
    <>
    {/*The helmet tags for the careers page goes here 
    <Helmet>
              <meta name="primary-keywords" content={PrimaryKeywords} />
        <meta name="secondary-keywords" content={SecondaryKeywords} />
        <meta name="long-tail-keywords" content={Longtailkeywords} />
            </Helmet>
            the tags closes here */}


      <div className="fade-in-career">
        <Header />
        <main className="main-career-conten">
          <section className="first-career-section">
            <div className="career-we-dare">
              <h1 style={{ position: "absolute", right: "45%", top: "5.9rem" }}>
                {" "}
                Dare To
              </h1>
              <CareerTransitionText
                text1="Think"
                text2="Create"
                text3="& Sell Your Ideas"
              />
            </div>
          </section>
          <section className="second-career-section">
            <div className="career-why-work">
              <h1>Why Work With Us</h1>
            </div>
            <div className="end-centered-open-rolejj">
              <div className="career-youtube-con">
                <ReactPlayer
                  id="end-centered-open-role-img"
                  wrapper={"div"}
                  url="https://www.youtube.com/watch?v=xWBw4tfw2fQ&t=276s"
                  width="80%"
                  height={300}
                  playing={false}
                  controls={true}
                />
              </div>
            </div>
          </section>
          <section className="third-career-section">
            <CareerCard1 />
          </section>
          <section className="fourth-career-section">
            <h1 className="career-what-in-it">What's In It For You</h1>
            <div className="career-acordion-div">
              <AccordionCareer />
            </div>
          </section>
          <section className="fifth-career-section">
            <div className="career-interconnected">
              <div>
                <h1 className="career-inter-h1">
                  Our Interconnected Businesses
                </h1>
              </div>
              <div className="career-inter-img">
                {" "}
                <img src={armstongston} alt="Tongston" />
              </div>
            </div>
          </section>
          <section className="sixth-career-division-section">
            <OurDivisions />
          </section>
          <section className="sixth-career-section">
            <div>
              <h1 className="career-openrole-h1">Open Roles</h1>
            </div>
            <div>
              <a href="aboutTeam.pdf" download>
                <button className="moreTeamsBtn">More on the Teams </button>
              </a>
            </div>
            <div>
              <OpenCardRule />
            </div>
          </section>

          {/*Application-process */}

          <section
            className="seventh-career-section"
            style={{
              background: `url(${Appbg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "auto",
              display: "block",
              position: "relative",
              top: 0,
              paddingBottom: "2rem",
            }}
          >
            <ApplicationProcess />
          </section>

          <section className="eighth-career-section">
            <div className="career-stay-connected">
              <h1>Stay Connected</h1>
            </div>
            <div className="career-connected-main-card">
              <div className="career-connected-card1">
                <h3>Keep Up to Date </h3>
                <p>
                  Get first hand information about all the events happening at
                  Tongston
                </p>
                <a href="/insights">
                  <h1>
                    READ NEWS & INSIGHTS{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </h1>
                </a>
              </div>
              <div className="career-connected-card1">
                <h3>Get Job Alert </h3>
                <p>
                  {" "}
                  Be the first to get notified on job openings at Tongston{" "}
                </p>
                <a href="#career-subscribe-form">
                  <h1>
                    REGISTER FOR JOB ALERTS
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </h1>
                </a>
              </div>
            </div>
            <div></div>
          </section>
          <section>
            <div className="career-why-work" id="career-subscribe-form">
              <h1>Get The Latest News on Job Alerts</h1>
            </div>
            <form className="career-subscribe-form" onSubmit={handleSubmit}>
              <div className="form-input-con">
                <input
                  className="career-subscribe-form-input"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Full Name"
                  onChange={(event) => setName(event.target.value)}
                  required
                />
                <input
                  className="career-subscribe-form-input"
                  type="from_email"
                  name="user_email"
                  value={email}
                  placeholder="Email address"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <button type="submit" className="career-subscribe-form-submit">
                {loading ? "Loading..." : "Sign up"}
              </button>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Career;
