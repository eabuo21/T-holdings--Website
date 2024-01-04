import React, { useState } from "react";
import team1 from "../../assets/Images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import team4 from "../../assets/images/team4.png";
import team5 from "../../assets/images/team5.png";
import team6 from "../../assets/images/team6.png";
import team8 from "../../assets/images/team8.png";
import team9 from "../../assets/images/team9.png";
import team10 from "../../assets/images/team10.png";
import team20 from "../../assets/images/team20.png";
import team21 from "../../assets/images/team21.png";

function Teams() {
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
      avatar: team1,
      name: "Engr. Bello Mohammed Tongo",
      bio: "Chief Executive Officer, Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/bellotongo/",
    },
    {
      avatar: team2,
      name: "Halima Ibrahim Abba",
      bio: "Consultant  Chief Operating Officer | Chief Financial Officer, Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/halima-ibrahim-abba-llb-mphil-fiidm-71727328/",
    },
    {
      avatar: team3,
      name: "Fatima Abokhaiso Aliu",
      bio: "Assistant Manager, Tongston Entrepreneurship Media",
      link: "https://www.linkedin.com/in/fatima-aliu-434027178/",
    },
    {
      avatar: team4,
      name: "Adebayo Adeniyi",
      bio: "Senior I.T Officer,  Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/adeniyi-adebayo-bab5a2144/",
    },
    {
      avatar: team5,
      name: "Promise Abolarin",
      bio: "Data, Research and Economics Senior Officer, Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/abolarin-promise/?originalSubdomain=ng",
    },
    // {
    //   avatar: team8,
    //   name: "Kingsley Luka",
    //   bio: "Training, Curriculum Development & Integration and Resource Development Associate Officer, Tongston Entrepreneurship Institute",
    //   link: "https://www.linkedin.com/in/kingsley-luka-837825126/",
    // },
    {
      avatar: team9,
      name: "Philip Uwaoma",
      bio: "Data Science Associate Officer, Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/philip-uwaoma-b97b15216/",
    },
    // {
    //   avatar: team10,
    //   name: "Charles Nwankwo",
    //   bio: "Consultant IT (UI/UX) Graduate Officer, Tongston Entrepreneurship Holdings",
    //   link: "https://www.linkedin.com/in/charles-nwankwo-738908167/",
    // },
    {
      avatar: team6,
      name: "Ekunola Paul",
      bio: "Consultant IT Graduate Officer, Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/ekunola-paul-42712b1aa/",
    },
    {
      avatar: team20,
      name: "Emmanuel Abuo",
      bio: "Consultant IT Graduate Officer, Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/emmanuel-abuo-b41453206/",
    },
    {
      avatar: team21,
      name: "Adebanjo Fatimo",
      bio: "Data, Research and Economics Consultant Undergraduate Officer, Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/fatimo-adebanjo/",
    },
  ];

  const usersList = users.map((user) => {
    return (
      <div
        className="profile-container"
        style={{ transform: `translateX(-${sliderPosition * 90}%)` }}
      >
        <div className="profile-container-img">
          <div className="">
            <img src={user.avatar} alt="Avatar" class="img-fluid" />
          </div>
        </div>
        <div className="profile-container-text">
          <div className="user-bio d-flex">
            <h3 className="user-bio-name">{user.name}</h3>
            <div className="user-bio-p d-flex">
              <p className="user-bio-text">{user.bio}</p>
              <p className="bio-linkin">
                <div className="">
                  {" "}
                  <a
                    className="fa fa-linkedin linkin-profile"
                    href={user.link}
                    target="_blank"
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
      <div>
        <div className="teams-container">{usersList}</div>
      </div>
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

export default Teams;
