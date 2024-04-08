import React from "react";
import "../assets/css/storeslider.css";
import SCD1 from "../assets/Images/T-STORE/scd1.png";
import SCD12 from "../assets/Images/T-STORE/scd12.png";
import SCD11 from "../assets/Images/T-STORE/scd11.png";
import SCD5 from "../assets/Images/T-STORE/scd5.png";

const StoreSlider1 = () => {
  return (
    <>
      <div className="scd-scroll-container">
        <div className="scd-main-container">
          <a href="https://tongston.selar.co/" rel="noopener" target="_blank">
            <div className="scd-con1">
              <img src={SCD1} alt="store-products" />
              <div id="scd-text">
                <text>
                  Tongston Personal Branding <br />
                  Session
                </text>
                <br />
                <price> $1.31</price>
              </div>
            </div>
          </a>
          <a href="https://tongston.selar.co/" rel="noopener" target="_blank">
            <div className="scd-con2">
              <img src={SCD12} alt="store-products" />
              <div id="scd-text">
                <text>
                  Tongston Entrepreneurial CV/ <br /> Resume Clinic <br />
                </text>
                <price>
                  $ 2.12 <span className="old-price"> $ 6.35 </span>{" "}
                </price>
              </div>
            </div>
          </a>
          <a href="https://tongston.selar.co/" rel="noopener" target="_blank">
            <div className="scd-con3">
              <img src={SCD11} alt="store-products" />
              <div id="scd-text">
                <text>
                  Tongston Entrepreneurial <br /> Finance & Fundraising...{" "}
                  <br />
                </text>
                <price>FREE</price>
              </div>
            </div>
          </a>
          <a href="https://tongston.selar.co/" rel="noopener" target="_blank">
            <div className="scd-con4">
              <img src={SCD5} alt="store-products" />
              <div id="scd-text">
                <text>
                  Entrepreneurial Advertising & <br /> Marketing- Tongston...
                  <br />
                </text>
                <price>$ 31.83</price>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default StoreSlider1;
