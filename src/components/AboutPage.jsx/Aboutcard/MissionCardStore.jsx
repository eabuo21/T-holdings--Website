import React from 'react';
import "../../../assets/css/carreer.css";

const MissionCardStore = ({  title, avater, description, description1, description2, description3}) => {
  return (
    <div className="about-order3-text-content">
      <div data-aos="fade-right"className="about-order-vission cards-structure">
        <div className='about-img-title'>
        <span><img src={avater} alt="" height={50} width={50}/></span>
        <h1 className="vission-text-h1">{title}</h1>
        </div>
        <div className="">
          <p className="vission-text">{description}</p>
          <p className="vission-text">{description1}</p>
          <p className="vission-text">{description2}</p>
        </div>
      </div>
      </div>
  );
};

export default MissionCardStore;
