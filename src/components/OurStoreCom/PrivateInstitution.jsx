import React from "react";
import "../../assets/css/Store.css";
import StoreCard from "./StoreCard";
import edu1img from "../../assets/images/store/edu1img.png";
import edu2img from "../../assets/images/store/edu2img.png";
import cartimg1 from "../../assets/images/store/cartimg1.png";
import educationImg from "../../assets/images/store/educationImg.png";

const PrivateInstitution = () => {
  const cardsData = [
    {
      imageSrc: edu1img,
      description: "Tongston Introduction to Entrepreneurial Education Course",
      price: "$44.33",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: "₦20,000.00",
      productDescText: [
        "The Tongston Global Career and Business and Career Advisory (CBA) product is designed for adolescent intrapreneurs/entrepreneurs (ages 9 —18) in upper primary and secondary schools globally to discover their intrapreneurial and entrepreneurial paths by leveraging Tongston’s proprietary unique entrepreneurial thinking model and integrations from Career Development Institute, National Career Development Association, Skills Outside School Foundation, CPD UK, and the accredited international ASDAN (Award Scheme Development and Accreditation Network) courses",
      ],
      productDescList: ["To checkout, kindly click on the link below"],
      webLink: "https://tieec.webflow.io/",
    },
    {
      imageSrc: edu2img,
      description: "Tongston Global Career and Business and Career Advisory",
      price: "$166.22",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: "₦75,000.00",
      productDescText: [
        "The Tongston Global Career and Business and Career Advisory (CBA) product is designed for adolescent intrapreneurs/entrepreneurs (ages 9 —18) in upper primary and secondary schools globally to discover their intrapreneurial and entrepreneurial paths by leveraging Tongston’s proprietary unique entrepreneurial thinking model and integrations from Career Development Institute, National Career Development Association, Skills Outside School Foundation, CPD UK, and the accredited international ASDAN (Award Scheme Development and Accreditation Network) courses.",
      ],
      productDescList: ["To checkout, kindly click on the link below"],
      webLink: "https://mailchi.mp/ace0a675887b/careerbusiness_advisory",
    },
  ];

  return (
    <>
      <div className="store-h1-center">
        <h1>Education</h1>
      </div>
      <div className="category-mediadiv store-center-text">
        <img src={educationImg} className="img-full-store" alt="" />
        <div className="centered">
          <h1>Education </h1>
        </div>
      </div>
      <div className="ourstore-card-containers">
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

export default PrivateInstitution;
