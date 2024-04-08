import React, { useState } from "react";
import team13 from "../../assets/images/team13.png";
import team14 from "../../assets/images/team14.png";
import team15 from "../../assets/images/team15.png";
import team16 from "../../assets/images/team16.png";
import team17 from "../../assets/images/team17.png";
import team18 from "../../assets/images/team18.png";
import team19 from "../../assets/images/team19.png";

function Board() {
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleSlideLeft = () => {
    setSliderPosition((prevPosition) => Math.max(prevPosition - 1, 0));
  };

  const handleSlideRight = () => {
    setSliderPosition((prevPosition) =>
      Math.min(prevPosition + 1, users.length - 0)
    );
  };

  const users = [
    {
      avatar: team13,
      name: "Mr. Hassan Usman",
      bio: "CEO of New Frontier Development Limited, and a board member of Access Bank Plc",
      link: "https://www.linkedin.com/in/hassan-usman-fca-4925343/",
    },
    {
      avatar: team14,
      name: "Dr. Lukman Raimi",
      bio: "Assistant Professor of Entrepreneurship, Universiti Brunei Darussalam",
      link: "https://www.linkedin.com/in/dr-lukman-raimi-mnim-fifp-fcgep-fcent-fimc-cmc-02404b25",
    },
    {
      avatar: team15,
      name: "Mr. Ohio Ifiabor",
      bio: "Previously Executive Director/Chief Operating Officer of Globacom Nigeria",
      link: "https://www.linkedin.com/in/ohio-ifiabor-2bb28810/",
    },
    {
      avatar: team16,
      name: "Alh. Umaru Kwairanga",
      bio: "CEO, Finmal Finance Services, Chairman of Gombe Investments & Property Development Company",
      link: "https://www.linkedin.com/in/umaru-kwairanga-76809415/",
    },
    {
      avatar: team17,
      name: "Dr. Ekenta Cornelius Micheal",
      bio: " Distinguished academic and prior Assistant General Manager of the Kaduna Business School",
      link: "https://www.linkedin.com/in/cornelius-ekenta-a27a6062/",
    },
    {
      avatar: team18,
      name: "Mr. Peter Edoh",
      bio: "Director, Forth-Spring Consulting, and a British Council and World Bank Consultant",
      link: "https://www.linkedin.com/in/peter-edoh-b59745115/",
    },
    {
      avatar: team19,
      name: "Mr. Kenneth Nwaichi",
      bio: "CEO, Kenbridge Consulting and distinguished Academician",
      link: "https://www.linkedin.com/in/kenneth-nwaichi-26323774/",
    },
  ];

  const usersList = users.map((user) => {
    return (
      <div
        className="profile-container"
        style={{ transform: `translateX(-${sliderPosition * 80}%)` }}
      >
        <div className="profile-container-img">
          <div className="">
            <img src={user.avatar} alt="Avatar" class="img-fluid" />
          </div>
        </div>
        <div className="profile-container-text">
          <div className="user-bio d-flex">
            <h3 className="user-bio-name-board">{user.name}</h3>
            <div className="user-bio-p d-flex">
              <p className="user-bio-text">{user.bio}</p>
              <p className="bio-linkin">
                <div className="">
                  {" "}
                  <a
                    target="_blank"
                    className="fa fa-linkedin linkin-profile"
                    href={user.link}
                  ></a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="teams-slider">
      <div className="teams-container">{usersList}</div>
      {/* slider */}
      <div className="slider-arrows">
        <span
          className="teams-arrow fa-solid fa-arrow-left"
          onClick={handleSlideLeft}
        ></span>
        <span
          className="teams-arrow fa-solid fa-arrow-right"
          onClick={handleSlideRight}
        ></span>
      </div>
    </div>
  );
}

export default Board;
