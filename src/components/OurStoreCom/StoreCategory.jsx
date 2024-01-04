import React from "react";
import { useState } from "react";
import "../../assets/css/Store.css";
import mediaimg from "../../assets/images/store/mediaimg.png";
import entpriseDataImg from "../../assets/images/store/entpriseDataImg.png";
import technologyimg from "../../assets/images/store/technologyimg.png";
import profimg from "../../assets/images/store/profimg.png";
import educationImg from "../../assets/images/store/educationImg.png";
import enterpriseImg from "../../assets/images/store/enterpriseImg.png";
import DataCard from "./CardData";
import Technology from "./Technology";
import EnterpriseData from "./EnterpriseData";
import FinanceData from "./Finance";
import Education from "./PrivateInstitution";
import Enterprise from "./NonProfitInstitution";

const StoreCategory = () => {
  const [closeNav, setCloseNav] = useState("close");
  const [techNav1, setTechNav1] = useState("close");
  const [techNav2, setTechNav2] = useState("close");
  const [techNav3, setTechNav3] = useState("close");
  const [techNav4, setTechNav4] = useState("close");
  const [techNav5, setTechNav5] = useState("close");

  const [closeSection, setCloseSection] = useState("category-main-content");
  const handleClickClose = () => {
    setCloseNav("open");
    setCloseSection("close");
  };

  const handleClickTech1 = () => {
    setTechNav1("open");
    setCloseSection("close");
  };
  const handleClickTech2 = () => {
    setTechNav2("open");
    setCloseSection("close");
  };
  const handleClickTech3 = () => {
    setTechNav3("open");
    setCloseSection("close");
  };
  const handleClickTech4 = () => {
    setTechNav4("open");
    setCloseSection("close");
  };
  const handleClickTech5 = () => {
    setTechNav5("open");
    setCloseSection("close");
  };
  const handleClickOpen = () => {
    setCloseNav("close");
    setTechNav1("close");
    setTechNav2("close");
    setTechNav3("close");
    setTechNav4("close");
    setTechNav5("close");
    setCloseSection("category-main-content");
  };

  return (
    <section className="category-main ">
      <div className={closeSection}>
        <div className="store-h1-center">
          <h1>Choose A Category</h1>
        </div>

        <div className="category-main-content1">
          <div
            onClick={handleClickClose}
            className="category-media-div store-center-text"
          >
            <img src={mediaimg} alt="" />
            <div className="centered">
              <h1>Media </h1>
            </div>
          </div>
          <div
            onClick={handleClickTech1}
            className="category-technology-div store-center-text"
          >
            <img src={entpriseDataImg} alt="" />
            <div className="centered">
              <h1>
                Enterprise -<br /> Technology{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="category-main-content2">
          <div
            onClick={handleClickTech2}
            className="category-enterprise-div store-center-text"
          >
            <img src={technologyimg} alt="" />
            <div className="centered">
              <h1>Enterprise - Data </h1>
            </div>
          </div>
          <div className="hide-content">
            <EnterpriseData />
          </div>
          <div
            onClick={handleClickTech3}
            className="category-professional-div store-center-text"
          >
            <img src={profimg} alt="" />
            <div className="centered">
              <h1>Finance </h1>
            </div>
          </div>
        </div>
        <div className="category-main-content3">
          <div
            onClick={handleClickTech4}
            className="category-education-div store-center-text"
          >
            <img src={educationImg} alt="" />
            <div className="centered">
              <h1>Education </h1>
            </div>
          </div>
          <div
            onClick={handleClickTech5}
            className="category-nonprofit-div store-center-text"
          >
            <img src={enterpriseImg} alt="" />
            <div className="centered">
              <h1>Enterprise</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={closeNav}>
        <div className="ourstore-close-btn">
          <button onClick={handleClickOpen}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>
        <DataCard />
      </div>
      <div className={techNav1}>
        <div className="ourstore-close-btn">
          <button onClick={handleClickOpen}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>
        <Technology />
      </div>
      <div className={techNav2}>
        <div className="ourstore-close-btn">
          <button onClick={handleClickOpen}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>
        <EnterpriseData />
      </div>
      <div className={techNav3}>
        <div className="ourstore-close-btn">
          <button onClick={handleClickOpen}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>
        <FinanceData />
      </div>
      <div className={techNav4}>
        <div className="ourstore-close-btn">
          <button onClick={handleClickOpen}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>
        <Education />
      </div>
      <div className={techNav5}>
        <div className="ourstore-close-btn">
          <button onClick={handleClickOpen}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>
        <Enterprise />
      </div>
    </section>
  );
};

export default StoreCategory;
