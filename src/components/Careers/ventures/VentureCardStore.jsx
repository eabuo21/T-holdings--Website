import React from "react";
import VentureCard from "./VentureCard";

function VentureCardStore() {
  const carrerCard2 = [
    {
      color: "#000000",
      title: "Tongston Ventures Intern",
      description: "Tongston Holdings",
      descriptions: "Remote",
      link: "#ventures",
    },
    {
      color: "#0A66C2",
      title: "Legal Policy Regulatory and Governance intern",
      description: "Tongston Holdings",
      descriptions: "On-Site (Abuja)",
      link: "#policy",
    },
    {
      color: "#F12731",
      title: "Publications Intern (Full Time)",
      description: "Tongston Media",
      descriptions: "Remote",
      link: "#public",
    },
    {
      color: "#F9ED00",
      title: "Branding, Communications, PR and Marketing Intern (Full Time)",
      description: "Tongston Media",
      descriptions: "Remote",
      link: "#brand",
    },
    {
      color: "#000000",
      title: "IT Intern",
      description: "Tongston Media",
      descriptions: "Remote & Hybrid",
      link: "#IT",
    },
    {
      color: "#05FF00",
      title:
        "Training, Curriculum Development and Integration Consultant (Contract)",
      description: "Tongston Institute",
      descriptions: "On-site (Gombe)",
      link: "",
    },
    {
      color: "#F1273F",
      title: "Resource Development Consultant (Contract)",
      description: "Tongston Media",
      descriptions: "Remote & Hybrid",
      link: "",
    },
  ];

  return (
    <div className="career-ventures-card2-container">
      {carrerCard2.map((card, index) => (
        <VentureCard
          key={index}
          color={card.color}
          title={card.title}
          description={card.description}
          descriptions={card.descriptions}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default VentureCardStore;
