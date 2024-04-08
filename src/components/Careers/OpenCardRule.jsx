import React from "react";
import OpenCard from "./OpenCard";

function OpenCardRule() {
  const carrerCard1 = [
    {
      color: "#DC0404",
      title: "Admin &  HR  Intern",
      description: "Undergraduate & Postgraduate Students",
      text: "",
      descriptions: "In person - Abuja ",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfaj2fGMfl_5KivOFDE97UfSOLc5hiQP_O67CAdW90q5Z17yA/viewform",
    },
    {
      color: "#9E19E2",
      title: "Business Development  Intern",
      description: "Undergraduate & Postgraduate Students",
      text: "",
      descriptions: "Remote",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfaj2fGMfl_5KivOFDE97UfSOLc5hiQP_O67CAdW90q5Z17yA/viewform",
    },
    {
      color: "#FF00C7",
      title: "Data, Research & Economics Intern",
      description: "Undergraduate & Postgraduate Students",
      text: "",
      descriptions: "Remote ",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfaj2fGMfl_5KivOFDE97UfSOLc5hiQP_O67CAdW90q5Z17yA/viewform",
    },

    {
      color: "#FFAB09",
      title: "Finance & Accounts Intern",
      description: "Undergraduate & Postgraduate Students",
      text: "",
      descriptions: "Remote ",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfaj2fGMfl_5KivOFDE97UfSOLc5hiQP_O67CAdW90q5Z17yA/viewform",
    },
    {
      color: "#00A3FF",
      title: "Branding, Communication, PR & Marketing Intern ",
      description: "Undergraduate & Postgraduate Students",
      text: "",
      descriptions: "Remote",
      link: "apply",
    },

    {
      color: "#1F1BE9",
      title: "Publications Intern",
      description: "Undergraduate & Postgraduate Students",
      text: "",
      descriptions: "Remote",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfaj2fGMfl_5KivOFDE97UfSOLc5hiQP_O67CAdW90q5Z17yA/viewform",
    },
    {
      color: "#1F1BE9",
      title: "Motion Graphics & Video editing Intern",
      description: "Undergraduate & Postgraduate Students",
      text: "",
      descriptions: "Remote",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfaj2fGMfl_5KivOFDE97UfSOLc5hiQP_O67CAdW90q5Z17yA/viewform",
    },
    {
      color: "#9E19E2",
      title: "Tongston Ventures Intern",
      description: "Undergraduate & Postgraduate Students",
      text: "",
      descriptions: "Remote",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfaj2fGMfl_5KivOFDE97UfSOLc5hiQP_O67CAdW90q5Z17yA/viewform",
    },
    {
      color: "#9E19E2",
      title: "Back End Development intern",
      description: "Undergraduate & Postgraduate Students",
      text: "",
      descriptions: "Remote",
      link: "apply",
    },
    {
      color: "#1F1BE9",
      title: "Front End Development intern",
      description: "Undergraduate & Postgraduate Students",
      text: "",
      descriptions: "Remote",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfaj2fGMfl_5KivOFDE97UfSOLc5hiQP_O67CAdW90q5Z17yA/viewform",
    },
    {
      color: "#9E19E2",
      title: "UI/UX intern",
      description: "Undergraduate & Postgraduate Students",
      text: "",
      descriptions: "Remote",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfaj2fGMfl_5KivOFDE97UfSOLc5hiQP_O67CAdW90q5Z17yA/viewform",
    },
    // consultant
    {
      color: "#9E19E2",
      title: "Research, Data, Monitoring & Evaluation Consultancy",
      description: "Adhoc / Consultancy",
      text: "",
      descriptions: "Remote",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfcEic5HY6hBTwgQWij9TBM2rm5RtWDvKw7jnAZAEv1uVF7NA/viewform?usp=sf_link",
    },
    {
      color: "#1F1BE9",
      title: "Business Analyst / Solutions Architect Consultancy",
      description: "Adhoc / Consultancy",
      text: "",
      descriptions: "Remote",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfcEic5HY6hBTwgQWij9TBM2rm5RtWDvKw7jnAZAEv1uVF7NA/viewform?usp=sf_link",
    },
    {
      color: "#FFAB09",
      title: "Trainer, Curriculum Development Consultancy ",
      description: "Adhoc / Consultancy",
      text: "",
      descriptions: "Remote",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfcEic5HY6hBTwgQWij9TBM2rm5RtWDvKw7jnAZAEv1uVF7NA/viewform?usp=sf_link",
    },
    {
      color: "#00A3FF",
      title: "Admin and HR NYSC Corps Member",
      description: "Full-time / NYSC ",
      text: "",
      descriptions: "In Person - Abuja",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeyWhCYvZV2CIj8plx8mFSjf7E6mGm3Rw8xjiCgU_w9cpvZSg/viewform",
    },
    {
      color: "#1F1BE9",
      title: "T-Media NYSC Corps Member",
      description: "Full-time / NYSC ",
      text: "",
      descriptions: "In Person - Abuja ",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeyWhCYvZV2CIj8plx8mFSjf7E6mGm3Rw8xjiCgU_w9cpvZSg/viewform",
    },
    {
      color: "#FFAB09",
      title: "Trainer, Curriculum Development NYSC Corps Member",
      description: "Full-time / NYSC ",
      text: "",
      descriptions: "In Person - Abuja ",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeyWhCYvZV2CIj8plx8mFSjf7E6mGm3Rw8xjiCgU_w9cpvZSg/viewform",
    },

    //full time and consultants roles here
  ];

  return (
    <div className="career-card2-container">
      {carrerCard1.map((card, index) => (
        <OpenCard
          key={index}
          color={card.color}
          title={card.title}
          description={card.description}
          text={card.text}
          descriptions={card.descriptions}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default OpenCardRule;
