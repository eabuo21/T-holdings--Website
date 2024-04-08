/** @format */

import React, { useState, useEffect } from "react";

import "../../assets/css/Applicationpage.css";

const ApplicationPage = () => {
  //scroll effect to make the webpage scroll back to the top of the page on page enter instead of stying at initial position

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    handleScroll();
  }, [1]);

  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + 15);

  const options = { day: "numeric", month: "short", year: "numeric" };
  const futureDate = currentDate.toLocaleDateString(undefined, options);

  const [showapplicationform, setShowApplicationForm] = useState(false);

  const handleOpenApplicationForm = () => {
    setShowApplicationForm(true);
  };

  const handlecloseApplicationForm = () => {
    setShowApplicationForm(false);
  };

  return (
    <>
      <div className="min-application-container" style={{}}>
        {/*  Application page roles descriptions  */}

        {/*first section of the   application age*/}
        <section
          className="desk-1"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <div className="title-container">
            <h1 className="role-title">Admin & HR Intern</h1>
            <div className="sub-title-container">
              <p className="sub-title">Undergraduate & Postgraduate Students</p>
            </div>
            <section className="locations-mapper-section">
              <div
                className="locations-container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "start",
                  aa,
                }}
              >
                <p className="items-content">Location: Hybrid </p>
                <p className="items-content">salary: Confidential</p>
                <p className="items-content">
                  Application end date: {futureDate}
                </p>
                {/*  Description of the role goes in the ode bellow */}
                <jobs className="description-container">
                  <div
                    className="jobs-container"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      justifyContent: "start",
                      alignItems: "start",
                      margin: "auto",
                      overflow: "hidden",
                      paddingTop: "2rem",
                    }}
                  >
                    <h2 className="heading-desc">About The Role:</h2>
                    <text
                      className="description-text"
                      style={{
                        fontWeight: "400",
                        fontFamily: "serif",
                        fontSize: "20px",
                        textAlign: "justify",
                        width: "80%",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Praesentium sit laudantium rem nesciunt magni blanditiis.
                      Dolores voluptatum iure minima itaque eum ratione
                      similique enim deleniti nemo ea at eius modi sequi
                      consequatur quam repudiandae, praesentium dolor fuga!
                      Assumenda, placeat magnam earum laboriosam nam fugiat
                      recusandae quos expedita dolores distinctio commodi!
                      Delectus soluta natus, ipsam alias tenetur maiores atque
                      consequatur sed ex laboriosam, distinctio nesciunt
                      officiis. Veniam quae quis ea ab.
                    </text>
                  </div>

                  {/*  Job descriptions */}
                  <div
                    className="jobs-container"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      justifyContent: "start",
                      alignItems: "start",
                      margin: "auto",
                      overflow: "hidden",
                      paddingTop: "2rem",
                    }}
                  >
                    <h2 className="heading-desc">Description:</h2>
                    <text
                      className="description-text"
                      style={{
                        fontWeight: "400",
                        fontFamily: "serif",
                        fontSize: "20px",
                        textAlign: "justify",
                        width: "80%",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Praesentium sit laudantium rem nesciunt magni blanditiis.
                      Dolores voluptatum iure minima itaque eum ratione
                      similique enim deleniti nemo ea at eius modi sequi
                      consequatur quam repudiandae, praesentium dolor fuga!
                      Assumenda, placeat magnam earum laboriosam nam fugiat
                      recusandae quos expedita dolores distinctio commodi!
                      Delectus soluta natus, ipsam alias tenetur maiores atque
                      consequatur sed ex laboriosam, distinctio nesciunt
                      officiis. Veniam quae quis ea ab.
                    </text>
                  </div>

                  {/* Requirements-section*/}
                  <div
                    className="jobs-container"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      justifyContent: "start",
                      alignItems: "start",
                      margin: "auto",
                      overflow: "hidden",
                      paddingTop: "2rem",
                    }}
                  >
                    <h2 className="heading-desc">Requirements:</h2>
                    <text
                      className="description-text"
                      style={{
                        fontWeight: "400",
                        fontFamily: "serif",
                        fontSize: "20px",
                        textAlign: "justify",
                        width: "80%",
                      }}
                    >
                      <ul className="items">
                        <li> Lorem ipsum dolor sit.</li>
                        <li> Lorem ipsum dolor sit.</li>
                        <li> Lorem ipsum dolor sit.</li>
                        <li> Lorem ipsum dolor sit.</li>
                        <li> Lorem ipsum dolor sit.</li>
                        <li> Lorem ipsum dolor sit.</li>
                        <li> Lorem ipsum dolor sit.</li>
                      </ul>
                    </text>
                  </div>

                  {/* submit button*/}

                  <button
                    onClick={() => handleOpenApplicationForm()}
                    className="apply-button-application "
                    style={{
                      background: "red",
                      border: "none",
                      padding: "1rem",
                      color: "white",
                      width: "40vh",
                      fontSize: "24px",
                    }}
                  >
                    Apply Now
                  </button>
                  {showapplicationform && (
                    <ApplicationForm
                      onClose={() => handlecloseApplicationForm()}
                    />
                  )}
                </jobs>
              </div>
            </section>
          </div>
        </section>

        {/*second section of the   application age*/}
        <section className="dck-2"></section>

        {/*third section of the   application age*/}
        <section className="dck-2"></section>
      </div>
    </>
  );
};

export default ApplicationPage;
