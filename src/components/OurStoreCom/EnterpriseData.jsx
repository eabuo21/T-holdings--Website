import React from "react";
import "../../assets/css/Store.css";
import StoreCard from "./StoreCard";
import tEdata1 from "../../assets/images/store/tEdata1.png";
import cartimg1 from "../../assets/images/store/cartimg1.png";
import technologyimg from "../../assets/images/store/technologyimg.png";

const EnterpriseData = () => {
  const cardsData = [
    {
      imageSrc: tEdata1,
      description: "Tongston Entrepreneurial Data Science",
      price: "$221.66",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: " ",
      productDescText: [
        "The world is currently revolving around data, as such all employees (intrapreneurs) and Employers of labor entrepreneurs need the ability to collect (research), store and manage and analyze complex business, marketing and operational data no matter the field and profession of interest.",
        "The Entrepreneurial Data Science course is for professionals, entrepreneurs and individuals.",
        "Key Benefits",
      ],
      productDescList: [
        "● Unique content: Learners find it easier to learn and practice by adding assessment sessions, and a project completion before getting the certificate",
        "● Courses are entrepreneurial focused e.g. data analysis training in the medical line will focus on medical related real life content, data collection and analysis or MSE related data for MSMEs",
        "● Gain Knowledge about Cutting-Edge Technology",
        "● Business optimization Capabilities",
        "● Flexible Learning",
        "● Countless High paying Job Opportunities",
        "● Gain Entrepreneurial Thinking Skills",

        "To checkout, kindly click on the link below",
      ],
      webLink: "https://tongston.selar.co/a4ut",
    },
  ];

  return (
    <>
      <div className="store-h1-center">
        <h1>Enterprise - Technology</h1>
      </div>
      <div className="category-mediadiv store-center-text">
        <img src={technologyimg} className="img-full-store" alt="" />
        <div className="centered">
          <h1>Enterprise - Technology </h1>
        </div>
      </div>
      <div className="ourstore-card-container">
        {cardsData.map((card, index) => (
          <StoreCard
            key={index}
            imageSrc={card.imageSrc}
            description={card.description}
            price={card.price}
            button={card.button}
            cartSrc={card.cartSrc}
            productDescTitle={card.productDescTitle}
            productDescText={card.productDescText}
            productDescList={card.productDescList}
          />
        ))}
      </div>
    </>
  );
};

export default EnterpriseData;
