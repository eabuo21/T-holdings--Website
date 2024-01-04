import React from "react";
import "../../../assets/css/carreer.css";
import VentureCardStore from "./VentureCardStore";
import OpenRoleVetures from "./OPenRole";
import OpenRole2 from "./OPenRole2";
import OpenRole3 from "./OPenRole3";
import OpenRole4 from "./OPenRole4";
import OpenRole5 from "./OPenRole5";
import MainHeader from "../../../components/MainHeader";
// import Footer from "../../../components/Footer";

function AllOpenRoles() {
  return (
    <>
      <MainHeader />
      <section className="all-open-role-main">
        <div className="all-open-role-container-left">
          <div className="career-ventures1-open-roles">
            <h3>
              Open roles available <br />
              <span>182 results</span>
            </h3>
            <span className="fixed-role-icon">
              <i class="fa-solid fa-sliders"></i>
            </span>
          </div>
          <div className="open-role-card-venture">
            <VentureCardStore />
          </div>
        </div>
        <div className="all-open-role-container-right">
          <div>
            <OpenRoleVetures />
          </div>
          <div>
            <OpenRole2 />
          </div>
          <div>
            <OpenRole3 />
          </div>
          <div>
            <OpenRole4 />
          </div>
          <div>
            <OpenRole5 />
          </div>
        </div>
      </section>
    </>
  );
}
export default AllOpenRoles;
