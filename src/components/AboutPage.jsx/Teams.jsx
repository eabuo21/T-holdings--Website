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
      description: "Bello M Tongo is an award-winning executive with 14+ years in construction, entrepreneurship and education. He has a rich background in teaching and curriculum design, having worked with leading educational and other institutions. Holding degrees in Civil Engineering, Construction Management and Education, Bello is a recognized speaker, mentor, and member of various professional networks.",
    },
    {
      avatar: team2,
      name: "Halima Ibrahim Abba",
      bio: "Consultant  Chief Operating Officer | Chief Financial Officer, Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/halima-ibrahim-abba-llb-mphil-fiidm-71727328/",
      description : "Halima Ibrahim Abba is a distinguished professional with 14 years of experience across public, private, and non-profit sectors, notably in infrastructure finance and international development, and is the founder of the pan-African Skills Outside School Foundation. She has played pivotal roles in major projects like the Infrastructure Corporation of Nigeria, holds degrees from Kings College London and Cambridge University, serves on boards and is actively involved in various international associations and mentoring initiatives."
    },
    {
      avatar: team3,
      name: "Fatima Abokhaiso Aliu",
      bio: "Assistant Manager, Tongston Entrepreneurship Media",
      link: "https://www.linkedin.com/in/fatima-aliu-434027178/",
      description: "Fatima Aliu is experienced in Media instruction, digital marketing, 3D animation, branding, illustration and content creation. She is a cartoonist/animator who has worked for companies such as Nurtured Trees and a Digital Marketer who has worked for Youngstars Foundation, and a published author.  She is also a professionally trained teacher with a focus on science subjects and has worked with numerous schools including Premier International School, Living Treasures Academy and Granny Murray Schools. "
    },
    {
      avatar: team4,
      name: "Adebayo Adeniyi",
      bio: "Senior I.T Officer,  Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/adeniyi-adebayo-bab5a2144/",
      description: "Adeniyi Adebayo has 10+ years’ expertise in website development, IT, database management, network administration & management, cloud solutions and e-learning platform development. He has a Bachelor of Science degree in Computer Science and a National Diploma in Library and Information Science."
    },
    {
      avatar: team5,
      name: "Promise Abolarin",
      bio: "Data, Research and Economics Senior Officer, Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/abolarin-promise/?originalSubdomain=ng",
      description: "Promise Abolarin is an experienced Data analyst with 5+ years of experience, specializing in Data Analysis, Data Science, Education, and Monitoring and Evaluation (M&E). Promise Abolarin possesses skills in classroom management and student operations, with years of experience as an educator in the K12 education."
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
      description: "Philip Uwaoma is a distinguished Data Scientist, Financial Analyst, and Software Engineer with an impressive array of skills and competencies that span the realms of data science, financial analysis, business intelligence, software development, data analysis, and research."
    },
     {
      avatar: team21,
      name: "Adebanjo Fatimo",
      bio: "Data, Research and Economics Consultant Undergraduate Officer, Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/fatimo-adebanjo/",
      description : "Fatimo Adebanjo is a data scientist, skilled in Python, TABLEAU, Power BI, amongst other tools and a researcher. She has several certifications in data science from reputable institutions such as Data Camp, Aspilos Foundation, Festman Learning Hub, Skill Up Academy, Nigeria Digital, Future Academy African, Coursera, and Udacity.",
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
      description: "Ekunola Paul has 3+years of experience in frontend development, technical writing, and software engineering. His expertise encompasses technologies like React.js, JavaScript, TypeScript, React-Native, and Redux. He holds a degree in Computer Engineering from Olabisi Onabanjo University and is a graduate of ALX",
    },
    {
      avatar: team20,
      name: "Emmanuel Abuo",
      bio: " IT Graduate Officer, Tongston Entrepreneurship Holdings",
      link: "https://www.linkedin.com/in/emmanuel-abuo-b41453206/",
      description : "Emmanuel Abuo is an IT professional with a wide-ranging expertise in areas including frontend web development (React js), back-end development, technical support engineering (M365), sysops, product research, and systems and network administration.He holds a Bachelor of Science in Computer Science from Cross River University of Technology.",
    },
   
  ];

  const usersList = users.map((user) => {
    return (
      <div
        className="profile-container"
        style={{ transform: `translateX(-${sliderPosition * 90}%)` }}
      >
        <div className="profile-container-img">
          <div className="image-text-container">
            <img src={user.avatar} alt="Avatar" class="img-fluid" />
            <p className="descriptive-bio" style={{ background: 'black',  color: 'white', padding: '0.8rem',  }}>
              {user.description}
            </p>
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
