import React from "react";
import "../assets/css/home.css";
import facebook from "../assets/Icons/facebook.svg";
import twitter from "../assets/Icons/Twitter.svg";
import linkedin from "../assets/Icons/Linkedin.svg";
import instagram from "../assets/Icons/Instagram.svg";
import youtube from "../assets/Icons/Youtube.svg";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <img src={facebook} alt="facebook" />

          <span style={{ paddingLeft: "15px" }}> Facebook</span>
        </>
      ),
      href: "https://web.facebook.com/tongstoncompany/?_rdc=1&_rdr",
    },
    {
      id: 2,
      child: (
        <>
          <img src={youtube} alt="youtube" />
          <span style={{ paddingLeft: "15px" }}> Youtube </span>
        </>
      ),
      href: "https://www.youtube.com/@tongstonentrepreneurshipgr7",
    },
    {
      id: 3,
      child: (
        <>
          <img src={instagram} alt="instagram" />
          <span style={{ paddingLeft: "15px" }}> Instagram </span>
        </>
      ),
      href: "https://www.instagram.com/tongstoncompany/",
    },
    {
      id: 4,
      child: (
        <>
          <img src={twitter} alt="twitter" />
          <span style={{ paddingLeft: "15px" }}> Twitter </span>
        </>
      ),
      href: "https://twitter.com/tongstoncompany",
    },
    {
      id: 5,
      child: (
        <>
          <img src={linkedin} alt="linkedin" />
          <span style={{ paddingLeft: "15px" }}> LinkedIn </span>
        </>
      ),
      href: "https://www.linkedin.com/company/tongston",
    },
  ];
  return (
    <div className="socials-container ">
      <ul>
        {links.map(({ id, child, href, download, style }) => (
          <li key={id} className={style}>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              rel="noreferrer"
              download={download}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
