import React from "react";
import "../../assets/css/Store.css";
import StoreCard from "./StoreCard";
import tTech1 from "../../assets/images/store/tTech1.png";
import cartimg1 from "../../assets/images/store/cartimg1.png";
import entpriseDataImg from "../../assets/images/store/entpriseDataImg.png";

const Technology = () => {
  const cardsData = [
    {
      imageSrc: tTech1,
      description: "Tongston Programmers Den",
      price: "$221.66",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: " ",
      productDescText: [
        "Innovation workspace and programming languages for programmers",
      ],
      productDescList: [
        "● Unlimited internet access in the Tongston Entrepreneurial Hub",
        "● Access to learning & development for Vue.js, Node Javascript and Python",
        "● Access to computers which includes:",
        "● Access during business hours (including Saturdays and Sundays)",
        "● Workspace",
        "● Internet",
      ],
    },
  ];

  return (
    <>
      <div className="store-h1-center">
        <h1>Enterprise - Technology</h1>
      </div>
      <div className="category-mediadiv store-center-text">
        <img src={entpriseDataImg} className="img-full-store" alt="" />
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

export default Technology;
