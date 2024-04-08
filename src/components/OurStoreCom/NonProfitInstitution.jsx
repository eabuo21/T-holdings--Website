import React from "react";
import "../../assets/css/Store.css";
import StoreCard from "./StoreCard";
import enterprise1 from "../../assets/images/store/enterprise1.png";
import enterprise2 from "../../assets/images/store/enterprise2.png";
import enterprise3 from "../../assets/images/store/enterprise3.png";
import enterprise4 from "../../assets/images/store/enterprise4.png";
import cartimg1 from "../../assets/images/store/cartimg1.png";
import enterpriseImg from "../../assets/images/store/enterpriseImg.png";

const NonProfitInstitution = () => {
  const cardsData = [
    {
      imageSrc: enterprise1,
      description: "Tongston Entrepreneurial Training Room",
      price: "$7.76",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: "₦3,500.00 – ₦379,000.00",
      productDescText: [
        "Superior training room with professional Assistance. Book now! Our entrepreneurial training & meeting rooms are state-of-the-art in the heart of the city of Abuja, fully equipped with projector, whiteboards, HMDI & VGA converters, TV screen, video and audio conferencing facilities and Wi-Fi",
        "Can take up to 25 people.",
      ],
      productDescList: ["To checkout, kindly click on the link below"],
      webLink: "https://tongston.selar.co/82cm",
    },
    {
      imageSrc: enterprise2,
      description: "Entrepreneurial Virtual Office",
      price: "$116.22",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: "₦75,000.00 – ₦1,200,000.00",
      productDescText: [
        "Choose your membership plan with virtual office, training/meeting rooms and admin, education, legal, HR, media, data, legal, technology – programming & finance services; Upgrade as your personal brand or business evolves!",
      ],
      productDescList: [
        "i. Your Own Virtual Office",
        "Access business address, telephone answering service and the hub green lounge. Valid for incorporation and tax registration.",
        "ii. Discounted access to any of the user services",
        "Access admin, legal, entrepreneurial education, HR, media, data & finance services for all your business needs. Book now!",
        "To checkout, kindly click on the link below",
      ],
      webLink: "https://tongston.selar.co/rzrd",
    },
    {
      imageSrc: enterprise3,
      description: "Enterpreneurial Co-working Desk",
      price: "$8.42",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: "₦3,800.00 – ₦57,000.00",
      productDescText: [
        "Our entrepreneurial co-working space is designed with you being an entrepreneurial thinker in mind. It’s a great place to access media, enterprise, education services; and network with others to make your business – valuable, influential & profitable.",
        "Drop in and hot desk in our entrepreneurial workspace today!",
        "Benefits",
      ],
      productDescList: [
        "• Make use of our green lounge to meet others and collaborate",
        "• Available to access for hours, days, weeks or unlimited months",
        "• Access our Entrepreneurial Content through blogs & news",
        "• Access media, education and enterprise services with your membership",
        "• Enjoy exclusive member discounts and benefits",

        "To checkout, kindly click on the link below",
      ],
      webLink:
        "https://www.coworkbooking.com/africa/nigeria/abuja/tongston-entrepreneurial-hub1",
    },
    {
      imageSrc: enterprise4,
      description: "Tongston Enterpreneurial Meeting Room",
      price: "$4.34",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: " ",
      productDescText: [
        "Superior meeting room with professional Assistance. Book now! Our entrepreneurial meeting room is state-of-the-art in the heart of the city of Abuja, fully equipped with projector, whiteboards, HMDI & VGA converters, TV screen, video and audio conferencing facilities and Wi-Fi.",
      ],
      productDescList: ["To checkout, kindly click on the link below"],
      webLink: "https://tongston.selar.co/bjdz",
    },
  ];

  return (
    <>
      <div className="store-h1-center">
        <h1> Enterprise</h1>
      </div>
      <div className="category-mediadiv store-center-text">
        <img src={enterpriseImg} className="img-full-store" alt="" />
        <div className="centered">
          <h1>Enterprise</h1>
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

export default NonProfitInstitution;
