import React from "react";
import CareerStoreCard from "./CareerCardStore";

function CareerCard1() {
  const carrerCard1 = [
    {
      title: "Consultants",
      description:
        " We hire global talent that already have other jobs or businesses who are keen to provide their skills and knowledge across different group of companies on a remote / flexible basis.",
      link: "",
    },
    {
      title: "Interns",
      description:
        "We hire global talent for 3,6,12 months through our Tongston structured internship program across the group of companies",
      link: "",
    },
    {
      title: "NYSC Corps Members",
      description:
        "We hire global talent who wish to complete their mandatory 12 month national youth service in Nigeria across the group of companies",
      link: "",
    },
    {
      title: "Full-time / Part-time Staff",
      description:
        "We hire global talent on a full-time basis to join our core team driving our important work across the group of companies. This is across all levels from graduate officer roles to manager up to Director level",
      link: "",
    },
  ];

  return (
    <div className="career-card-container">
      {carrerCard1.map((card, index) => (
        <CareerStoreCard
          key={index}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default CareerCard1;
