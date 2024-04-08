import React from "react";
import "../../assets/css/Store.css";
import StoreCard from "./StoreCard";
import tFin1 from "../../assets/images/store/tFin1.png";
import cartimg1 from "../../assets/images/store/cartimg1.png";
import profimg from "../../assets/images/store/profimg.png";

const FinanceData = () => {
  const cardsData = [
    {
      imageSrc: tFin1,
      description: "Tongston Finance and Fundrasing for CEO and Snr Managers",
      price: "$443.24",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: "₦200,000.00",
      productDescText: [
        "A 3-part comprehensive 10-day session on building & scaling a profitable, valuable & influential business; managing & projecting your business finances; and fundraising as an MSME CEO or senior manager.",

        "Key Benefits",
      ],
      productDescList: [
        "● Delivered by practitioners that have built businesses with a finance background having closed US$1bn+ of projects across the African continent",
        "● Curated Role-Based Journeys – Using real-life case studies in the classroom from participants businesses",
        "● Live Classes – Access live, expert instruction",
        "● Certified by CPD UK",
        "● Collect CPD Points. Get Certification that is recognized!",
        "● Course Q&A Discussion",
        "● Hands-on practice in session",
        "● Personal Branding through Badges – You can share on your linkedin, CV and other critical platforms",
        "● Continuous Offline Learning",
        "● Access Finance and Accounting Support post the course",
        "● Access Funds through Tongston Ventures post the course",

        "To checkout, kindly click on the link below",
      ],
      webLink: "https://tongston.selar.co/ow9a",
    },
  ];

  return (
    <>
      <div className="store-h1-center">
        <h1>Finance</h1>
      </div>
      <div className="category-mediadiv store-center-text">
        <img src={profimg} className="img-full-store" alt="" />
        <div className="centered">
          <h1>Finance </h1>
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
            webLink={card.webLink}
          />
        ))}
      </div>
    </>
  );
};

export default FinanceData;
