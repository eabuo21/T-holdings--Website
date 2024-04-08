import React, { useState } from "react";
import "../assets/css/Footer.css";
import { Link as RouterLink, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-router-dom";
import PP from "../components/PrivacyPolicyModal";
import Logo from "../assets/images/tlogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showpp, setShowPP] = useState(false);
  const handlePrivacy = () => {
    setShowPP(true);
  };

  const handleClosePrivacy = () => {
    setShowPP(false);
  };

  return (
    <footer>
      <div className="fotter-container">
        <div className="rows">
          <div className="colunm">
            <h3> Our Businesses </h3>

            <ul>
              <li>
                {" "}
                <ScrollLink
                  to="/TongstonHoldings"
                  smooth={true}
                  spy={true}
                  duration={500}
                >
                  Tongston Holdings
                </ScrollLink>
              </li>
              <li>
                {" "}
                <ScrollLink
                  to="/TongstonInstitute"
                  smooth={true}
                  duration={500}
                >
                  {" "}
                  Tongston Institute{" "}
                </ScrollLink>
              </li>
              <li>
                {" "}
                <ScrollLink
                  activeclass="active"
                  to="/TongstonCollege"
                  spy={true}
                  duration={500}
                >
                  Tongston College{" "}
                </ScrollLink>
              </li>
              <li>
                {" "}
                <ScrollLink
                  to="https://t-hub.tongston.com/media"
                  smooth={true}
                  duration={500}
                >
                  {" "}
                  Tongston Media{" "}
                </ScrollLink>
              </li>
              <li>
                {" "}
                <ScrollLink
                  to="https://t-ventures.tongston.com"
                  smooth={true}
                  duration={500}
                >
                  Tongston Ventures{" "}
                </ScrollLink>
              </li>

                <li>
                {" "}
                <RouterLink to="https://t-hub.tongston.com" target="_blank">
                  {" "}
                 Tongston Hub
                </RouterLink>
              </li>
            </ul> 
          </div>
          <div className="colunm">
            <h3> Company </h3>
            <ul>
              <li>
                {" "}
                <RouterLink to="/About"> About </RouterLink>
              </li>
              <li>
                {" "}
                <RouterLink to="/Careers"> Careers </RouterLink>
              </li>
            

                 <li>
                {" "}
                <RouterLink to="*" target="_blank">
                  {" "}
               TEES 2024
                </RouterLink>
              </li>
            </ul>
          </div>

          <div className="colunm">
            <h3> Support </h3>
            <ul>
              <li>
                {" "}
                <RouterLink to="/Contact"> Contact Us </RouterLink>
              </li>
              <li>
                {" "}
                <Link onClick={() => handlePrivacy()}
                  to="#">
                  {" "}
                  Privacy Policy
                </Link>
                {showpp && <PP onClose={() => handleClosePrivacy()} />}
              </li>
            </ul>
          </div>

          <div className="colunm">
            <h3> Resources </h3>
            <ul>
              {/*   <li>
              
                <RouterLink
                  to="https://tongston.com/the-roadmap-to-value-influence-profitability-for-all-a-practical-toolkit-through-entrepreneurial-education-white-paper/"
                  target="_blank"
                >
                
                  Tongston Entrepreneurial <br /> Whitepaper{" "}
                </RouterLink>
              </li>   */}

              <li>
                {" "}
                <RouterLink
                  to="https://open.spotify.com/show/5myLgem74ziFBazrQjgbLZ"
                  target="_blank"
                >
                  {" "}
                  Tongston Entrepreneurial <br /> Thinking Podcast
                  <br />{" "}
                </RouterLink>
              </li>
              {/* <li>
                <RouterLink to="https://tongston.com/blog/" target="_blank">
                  Tongston Entrepreneurial <br /> Blog{" "}
                </RouterLink>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="social-icons">
          <h4> Follow Us! &darr;</h4>

          <a
            href="https://web.facebook.com/tongstoncompany/?_rdc=1&_rdr"
            target="_blank"
          >
            <i className="fa-brands fa-facebook facebook-icon"></i>
          </a>
          <a href="https://twitter.com/tongstoncompany " target="_blank">
            <i className="fa-brands fa-x-twitter twitter-icon"></i>
          </a>
          <a href="https://www.instagram.com/tongstoncompany/" target="_blank">
            <i className="fa-brands fa-instagram instagram-icon"></i>
          </a>
          <a href="https://www.linkedin.com/company/tongston" target="_blank">
            <i className="fa-brands fa-linkedin linkedin-icon"></i>
          </a>
          <a
            href="https://www.youtube.com/@tongstonentrepreneurshipgr7"
            target="_blank"
          >
            <i className="fa-brands fa-youtube youtube-icon"></i>
          </a>
        </div>
      </div>

      <div className="logo2">
        <RouterLink to="/" className="Home">
          <img src={Logo} alt="tongston logo" />
        </RouterLink>
      </div>
      <p
        className="copyright-text "
        style={{
          color: "white",
          fontFamily: "sans-serif",
          fontSize: "16px",
          marginLeft: "auto",
          marginRight: "auto",
      
          opacity: "0.5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",

        }}
      >
        &copy; Tongston {currentYear} all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
