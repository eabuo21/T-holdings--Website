import React, { useState } from "react";
import "../../assets/css/Store.css";
import StoreCard from "./StoreCard";
import tmedia2 from "../../assets/images/store/tmedia2.png";
import tmedia1 from "../../assets/images/store/tmedia1.png";
import tmedia3 from "../../assets/images/store/tmedia3.png";
import tmedia4 from "../../assets/images/store/tmedia4.png";
import tmedia5 from "../../assets/images/store/tmedia5.png";
import tmedia6 from "../../assets/images/store/tmedia6.png";
import cartimg1 from "../../assets/images/store/cartimg1.png";
import mediaimg from "../../assets/images/store/mediaimg.png";

const DataCard = () => {
  const cardsData = [
    {
      imageSrc: tmedia3,
      description: "Entrepreneurial Media Consulting",
      price: "$221.66",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: "₦100,000.00 – ₦10,000,000.00",
      productDescText: [
        "Make the most of your media spend to boost value, influence & profitability, through our unique strategy comprising of:",
      ],
      productDescList: [
        "● Effective direct-to-consumer strategies through an effective marketing promotion",
        "● Content optimization strategies to help you increase content monetization",
        "● Our integrated entrepreneurial thinking model to help you drive value, influence, and profitability",
        "● Public relations strategies to establish and achieve business goalsOur Solutions Starting from",
        "● Customer Experience/Relationship Management Solution ₦ 300,000",
        "● Customer Journey Orchestration & Analytics Solution ₦ 300,000    ",
        "● Data Management/Customer Data Analytics Solution ₦ 150,000",
        "● Digital Asset Management/Brand Management Solution ₦ 250,000      ",
        "● Marketing Operations/Project Management Solution ₦ 100,000     ",
      ],
      webLink: " ",
    },
    {
      imageSrc: tmedia4,
      description: "Tongston Entrepreneurial Advertising & Marketing",
      price: "$33.25",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: "₦14,999.00 – ₦1,500,000.00",
      productDescText: [
        "Advertisements are visual messages for promoting your products/services. We can help you craft effective marketing strategies to communicate your brand, through campaigns, SEO, digital media marketing through videos, flyers, short stories etc.",
        "Starting at ₦ 14,999, we have a range of premium services to meet all your needs. Please contact us to understand your needs and provide custom pricing for you, your organization or business achieve value, influence & profitability.",
        "Starting from",
      ],
      productDescList: [
        "1. Content Writing ₦ 14,999/month",
        "2. Social Media Marketing ₦29,900/month",
        "● Email & Social Media Campaigns ₦15,000",
        "● SEO/ Website Optimization ₦ 19,999/month ",
        "● Video Marketing Solution ₦ 49,999Full Service Digital Marketing        ",
        "Get the most out of your marketing spend. We would handpick media strategies to achieve your advertisement and marketing goals through",
        "– Social Media Marketing",
        "– Content & Email marketing",
        "– Conversion rate optimization (CRO)",
        "– SEO ",
        "– PPC",
        "To checkout, please click on the link below ",
      ],
      webLink: "https://tongston.selar.co/ulp9",
    },
    {
      imageSrc: tmedia5,
      description: "Entrepreneurial virtual & In-person Events Mgt & planning",
      price: "$216.98",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: " ",
      productDescText: [
        "Online Event Management & Planning Starting from        ",
      ],
      productDescList: [
        "● Webinars ₦ 149,999",
        " ● Conference/Summits ₦ 499,999",
        "● Award Ceremonies ₦ 99,999",
        " ● Pitch Events ₦ 199,999",
        " ● Product Launches ₦ 349,999",
        "In-door Event Management & Planning Starting from",
        " ● Meetings ₦ 200,000",
        "● In-person Conferences/ webinars ₦ 7,000,000",
        "● Award Ceremonies ₦ 18,000,000",
        "● Product Launches ₦ 25,000,000",
        "To checkout, kindly click the link",
      ],
      webLink: "https://tongston.selar.co/l6mp",
    },
    {
      imageSrc: tmedia6,
      description: "Entrepreneurial Public Relations & Corporate Communication",
      price: "$22.16",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: " ",
      productDescText: [
        "We help you design and disseminate effective communication & PR strategies to advance internal and external efficiency in executing tasks, boosting employee, investor, suppliers and customer engagement and increase knowledge sharing within your organization.",
        "Starting at ₦ 9,999, we have a range of premium services to meet all your needs. Please contact us to understand your needs and provide a custom pricing for you, your organization or business achieve value, influence & profitability.",
        "Starting at",
      ],
      productDescList: [
        "1. Design Written Communications & Press Releases ₦ 49,999/ month",
        "2. Design Pitch Books & Investor Pitch Decks ₦ 29,999",
        "3. Design Presentations ₦ 9,999",
        "To checkout, kindly click on the link  below",
      ],
      webLink: "https://tongston.selar.co/wvee",
    },
    {
      imageSrc: tmedia1,
      description: "Tongston Entrepreneurial Branding",
      price: "$6.65",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: "₦2,999.00 – ₦5,000,000.00 ",
      productDescText: [
        "Starting at ₦ 2,999, we have a range of premium services to meet all your needs. Please contact us to understand your needs and provide custom pricing for you, your organization or business achieve value, influence & profitability.",
        "Starting at",
      ],
      productDescList: [
        "1. Website Design & Dev. ₦ 49,999",
        "2. Web Management ₦ 5,999/ month",
        "3. Brand Identity & Value Design",
        "Mission, Vision, Story, Positioning, Messaging ₦250,000",
        "4. Corporate Brand Design & Print",
        "Brochures, logos, fliers and other communications materials",
        "Flier Design ₦ 2,999",
        "Corporate Brochures ₦ 69,999",
        "Personal Brochures ₦ 29,999",
        "Logo Design ₦ 29,999",
        "Business Cards Design ₦ 9,999",
        "Personal & Corporate Brochure Design ₦ 9,999",
        "Souvenir Design ₦ 6,999",
        "Stationery Design ₦ 9,999",
        "Typography & Typesetting ₦ 35,000",
        "Proofreading ₦ 35,000",
        "Banner design",
        "Roll up ₦ 9,999",
        "Flex ₦ 19,999",
        "Billboard Design ₦ 69,999",

        "To checkout, kindly use the link below",
      ],
      webLink: "https://tongston.selar.co/2p6v",
    },
    {
      imageSrc: tmedia2,
      description: "Entrepreneurial Multimedia Studio Production",
      price: "$8.86",
      button: "View More",
      cartSrc: cartimg1,
      productDescTitle: "₦3,999.00 – ₦5,000,000.00 ",
      productDescText: [
        "Starting at ₦ 3,999, we have a range of premium services from scripting, to audio & video recording to editing, to animations & photography in our state of the art studio to meet all your needs. Please contact us to understand your needs and provide custom pricing for you, your organization or business achieve value, influence & profitability.",
        "Starting at",
      ],

      productDescList: [
        "A. Pre-production",
        "● Scripting, Planning & Directing ₦ 59,999",

        " B. Production",
        "● In studio Live Video recordings, covers and jingles ₦ 4,999/ hour",
        "● In-Studio Live Audio Recordings, Covers & Jingles ₦ 3,999/ hour",
        "● 2D Animation – Whiteboard Animation ₦ 59,999/60 Sec.",
        "● 2D Animation – Explainer Video ₦ 59,999/30 Sec.",
        "● Podcast Custom Pricing",
        "● Outdoor Recording Custom Pricing",
        "● Event Photography ₦ 99,999 / 6 hours",
        " ● Product Photography ₦ 19,999",
        "● Indoor Photography ₦ 2,999",
        "C. Post-Production",
        "● Mixing & Mastering Audio ₦ 9,999/hour",
        " ● Photo Editing ₦ 5,000",
        "● Video Editing ₦ 19,999/hr",
        "To checkout, kindly click on the link below",
      ],

      webLink: "https://tongston.selar.co/vio2",
    },
  ];

  return (
    <>
      <div className="store-h1-center">
        <h1>Media</h1>
      </div>
      <div className="category-mediadiv store-center-text">
        <img src={mediaimg} className="img-full-store" alt="" />
        <div className="centered">
          <h1>Media </h1>
        </div>
      </div>
      <div className="ourstore-card-container">
        {cardsData.map((card, index) => (
          <StoreCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
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

export default DataCard;
