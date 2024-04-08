import React, { useState } from "react";
import "../assets/css/Applications.css";
import AppImg from "../assets/Images/career/AppImg.png";

const ApplicationProcess = () => {
  const [loading, setLoading] = useState(false);
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "src/assets/files/Tongston Recruitment Process.pdf";
    a.download = "Tongston Recruitment Process.pdf";

    // Add an event listener to track when the download is completed
    a.onload = () => {
      setLoading(false);
    };

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);


  };
  return (
    <>
      <div className="applications-container">
        <h1 className="career-openrole-h1">Application Process</h1>

        <img className="-image" src={AppImg} alt="applications_process" />
        <div
          className="download-app-button-section"
          style={{ position: "relative", top: "2rem" }}
        >
          <button
            onClick={handleDownload}
            target="_blank"
            className="download-button-app"
          >
           &rarr; Download Documentation &larr;

          </button>
        </div>
      </div>
    </>
  );
};

export default ApplicationProcess;
