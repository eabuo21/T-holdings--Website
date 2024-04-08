import React from "react";
import "../../../assets/css/carreer.css";
import VentureCardStore from "./VentureCardStore";

function CareerVentures() {
  return (
    <main className="career-venture-main-content">
      <section className="career-ventures-section">
        <div className="career-ventures1">
          <div className="career-ventures1-div">
            <div className="career-ventures1-open-roles">
              <h3>
                hello world <br />
                <span>182 results</span>
              </h3>
              <span>
                <i class="fa-solid fa-sliders"></i>
              </span>
            </div>
            <div className="career-ventures1-card-roles">
              <VentureCardStore />
            </div>
          </div>
        </div>
        <div className="career-ventures2">
          <p>hello world</p>
        </div>
      </section>
    </main>
  );
}

export default CareerVentures;
