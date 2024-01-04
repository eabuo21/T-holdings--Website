import Rreact from "react";
import "../assets/css/storeslider.css";
import SCD2 from "../assets/Images/T-STORE/scd2.png";
import SCD3 from "../assets/Images/T-STORE/scd3.png";
import SCD8 from "../assets/Images/T-STORE/scd8.png";
import SCD9 from "../assets/Images/T-STORE/scd9.png";
import SCD7 from "../assets/Images/T-STORE/scd7.png";
import SCD4 from "../assets/Images/T-STORE/scd4.png";
import SCD6 from "../assets/Images/T-STORE/scd6.png";
const StoreSlider2 = () => {
  return (
    <>
      <div>
        <div className="scd-scroll-container">
          <div className="scd-main-container">
            <a href="https://tongston.selar.co/" rel="noopener" target="_blank">
              <div className="scd-con1">
                <img src={SCD2} alt="store-products" />
                <div id="scd-text">
                  <text>
                    {" "}
                    Entrepreneurial Public Relations <br />& Coporate
                    communication....{" "}
                  </text>
                  <br />
                  <price> $ 21.86</price>
                </div>
              </div>
            </a>
            <a href="https://tongston.selar.co/" rel="noopener" target="_blank">
              <div className="scd-con2">
                <img src={SCD3} alt="store-products" />
                <div id="scd-text">
                  <text>
                    {" "}
                    Entrepreneurial Branding - <br />
                    Tongston Entrepreneurial Hub{" "}
                  </text>
                  <br />
                  <price> $ 218.58</price>
                </div>
              </div>
            </a>
            <a href="https://tongston.selar.co/" rel="noopener" target="_blank">
              <div className="scd-con3">
                <img src={SCD8} alt="store-products" />
                <div id="scd-text">
                  <text>
                    {" "}
                    Entrepreneurial Multimedia <br />
                    Studio Production - Tongston{" "}
                  </text>
                  <br />
                  <price> $ 8.74</price>
                </div>
              </div>
            </a>

            <a href="https://tongston.selar.co/" rel="noopener" target="_blank">
              <div className="scd-con4">
                <img src={SCD9} alt="store-products" />
                <div id="scd-text">
                  <text>
                    {" "}
                    Entrepreneurial Virtual & In- <br />
                    Person Events Mgt & Plannin....{" "}
                  </text>
                  <br />
                  <price> $ 219.25</price>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="scd-scroll-container">
          <div id="sub-container">
            <a href="https://tongston.selar.co/" rel="noopener" target="_blank">
              <div className="scd-con1">
                <img src={SCD7} alt="store-products" />
                <div id="scd-text">
                  <text>
                    {" "}
                    Entrepreneurial Data Science <br />
                    Course{" "}
                  </text>
                  <br />
                  <price> $ 16.71</price>
                </div>
              </div>
            </a>
            <a href="https://tongston.selar.co/" rel="noopener" target="_blank">
              <div className="scd-con2">
                <img src={SCD4} alt="store-products" />
                <div id="scd-text">
                  <text>
                    {" "}
                    Entrepreneurial Virtual Office <br />
                    (Tongston Entrepreneurial Hub){" "}
                  </text>
                  <br />
                  <price> $ 4.37</price>
                </div>
              </div>
            </a>
            <a href="https://tongston.selar.co/" rel="noopener" target="_blank">
              <div className="scd-con3">
                <img src={SCD6} alt="store-products" />
                <div id="scd-text">
                  <text>
                    {" "}
                    Entrepreneurial Co-Working Desk <br />
                    (Tongston Entrepreneuri...){" "}
                  </text>
                  <br />
                  <price> $ 4.37</price>
                </div>
              </div>
            </a>
            <a href="https://tongston.selar.co/" rel="noopener" target="_blank">
              <div className="scd-con4">
                <img src={SCD4} alt="store-products" />
                <div id="scd-text">
                  <text>
                    {" "}
                    Entrepreneurial Training Room <br />
                    (Tongston Entrepreneurial Hub){" "}
                  </text>
                  <br />
                  <price> $ 4.37</price>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreSlider2;
