/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Media-Queries/home.css";

const Products = ({ onClose }) => {
  return (
    <>
      <div
        className="main"
        style={{
          background: "transparent",
          position: "fixed",
          inset: "0",
          zIndex: "99999",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="sub-container"
          style={{
            position: "absolute",
            inset: "0",

            background: " black",
            opacity: "0.8",
            overflow: "hidden",
          }}
        ></div>
        <div
          className="block-items"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            className="button-container"
            style={{
              position: "relative",
              top: "2rem",
            }}
          >
            <button
              onClick={onClose}
              className="close-modal-button"
              style={{
                background: "red",
                border: "0",
                color: "white",
                fontSize: "35px",
                textAlign: "center",
                borderRadius: "50%",
                marginRight: "auto",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              &times;
            </button>
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="ease-in "
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top center"
            data-aos-delay="10"
            className="modal-main-content"
            style={{
              display: "flex",

              justifyContent: "center",
              alignItems: "start",

              marginLeft: "auto",
              marginRight: " auto",

              height: "60%",
              position: "relative",
              top: "2rem",

              borderRadius: "12px",
            }}
          >
            {/*first-section */}
            <section
              className="first-section-services"
              style={{
                rowGap: "0.4rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                overflowY: "auto",
                overflowX: 'auto',
                marginLeft: "auto",
                marginRight: "auto",

                height: "100%",
              }}
            >
              <Link to="/TongstonHoldings">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    border: "red",
                    opacity: "1",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",

                    borderRadius: "6px",
                  }}
                >
                  <p className="under-paragraph" style={{ color: "white" }}>
                    Impact /Sustainability Design & Assessment
                  </p>
                </box>
              </Link>

              {/*box 2*/}
              <Link to="/TongstonHoldings">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    border: "red",
                    opacity: "1",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    rowGap: "3px",
                    borderRadius: "6px",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Data Analysis consulting
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="/TongstonHoldings">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    border: "red",
                    opacity: "1",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Data science Consulting
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="/TongstonHoldings">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    border: "red",
                    opacity: "1",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    App / Website Design & Development
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="/TongstonHoldings">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    border: "red",
                    opacity: "1",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Software solutions - Cloud AI Business Solutions
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="/TongstonInstitute">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    opacity: "0.7",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Monitoring, evaluation & Learning [Base-Line, Mid-Line &
                    End-Line Process Evaluation]
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="/TongstonInstitute">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    opacity: "0.7",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    ICT & Programming Skills Training
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="https://t-hub.tongston.com/media ">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    opacity: "0.7",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Branding- Online Presence[Social media Presence ;
                    Website);collateral; Logo; Promotional Material ]
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to=" https://t-hub.tongston.com/media">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    opacity: "0.7",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Multimedia Content Production [3D Animation; 3D Animation;
                    Documentaries; Introduction videos]
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="https://t-hub.tongston.com/">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    opacity: "0.7",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Virtual Office & Workspace Solutions
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="https://t-hub.tongston.com/">
                <box
                  className="seconder-box"
                  style={{
                    background: "#008B8B",
                    opacity: "0.8",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Training & Meeting room Solutions
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="/TongstonInstitute">
                <box
                  className="seconder-box"
                  style={{
                    background: "#008B8B",
                    opacity: "0.8",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Curriculum Design & Development Consulting
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="/TongstonInstitute">
                <box
                  className="seconder-box"
                  style={{
                    background: "#008B8B",
                    opacity: "0.8",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Educational Curriculum Design Delivery , Monitoring &
                    Evaluation &and Showcase
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="/TongstonHoldings">
                <box
                  className="seconder-box"
                  style={{
                    background: "#008B8B",
                    opacity: "0.8",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    E-learning Content Production & Platform Development
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="https://t-hub.tongston.com/media">
                <box
                  className="seconder-box"
                  style={{
                    background: "#008B8B",
                    opacity: "0.8",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Documentation & Production for Marketing & Legacy Showcase
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="/TongstonHoldings">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    opacity: "0.8",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Industry & Market Research
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="https://t-ventures.tongston.com/">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    opacity: "0.8",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    MSME Intervention Design & Deployment
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="https://t-ventures.tongston.com/ ">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    opacity: "0.8",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Business Advisory
                  </p>
                </box>
              </Link>
              {/*box 2*/}
              <Link to="https://t-ventures.tongston.com/">
                <box
                  className="seconder-box"
                  style={{
                    background: "#191970",
                    opacity: "0.8",
                    height: "100px",
                    width: "25vh",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "3px",
                    borderRadius: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="under-paragraph"
                    style={{
                      color: "white",
                    }}
                  >
                    Governance Advisory
                  </p>
                </box>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
