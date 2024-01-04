import React from 'react';
import "../../../assets/css/carreer.css";

const CoreValueStore = ({  title,   description1, description2, description3, description4,}) => {
  return (
    <>
    <div className="about-order6-text-content ">
      <div data-aos="fade-up" data-aos-duration="3000" className="about-order6-card d-flex">
        <h1 className="core-value-h1">{title}</h1>
        <div className="core-value-p">
          <p className="">{description1}</p>
          <p className="">{description2}</p>
          <p className="">{description3}</p>
          <p className="">{description4}</p>
        </div>
      </div>
      </div>
      </>
  );
};

export default CoreValueStore;
