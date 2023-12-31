import React, { useEffect } from "react";
import Header from "../components/Header";
import "../assets/css/events.css";
import pe1 from "../assets/Images/pe1.png";
import pe2 from "../assets/Images/pe2.png";
import pe3 from "../assets/Images/pe3.png";
import pe4 from "../assets/Images/pe4.png";
import pe5 from "../assets/Images/pe5.png";
import pe6 from "../assets/Images/pe6.png";
import pe7 from "../assets/Images/pe7.png";
import pe8 from "../assets/Images/pe8.png";
import pe9 from "../assets/Images/pe9.png";
import pe10 from "../assets/Images/pe10.png";
import pe11 from "../assets/Images/pe11.png";
import pe12 from "../assets/Images/pe12.png";
import MailingList from "../components/MailingList";
import UpcomingEvent from "../components/InsightPage.jsx/UpcomingEvent";
import PastEventCard from "../components/InsightPage.jsx/PastEventCard";
import Footer from "../components/footer";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pastEvents = [
    {
      PBtn: "In-person & Virtual Event",
      header: "Nigeria Investment Summit Panel Part 2",
      date: "Nov 2, 2022",
      location: "Park Plaza",
      eventLink: "https://www.youtube.com/watch?v=QDxUEt3gFHc",
      Image: pe1,
    },
    {
      PBtn: "Virtual Event",
      header:
        "The Tongston Ultimate Guide to Accessing Funds for a business/passion",
      date: " July 27, 2022",
      location: " Zoom webinar",
      eventLink: "https://www.youtube.com/watch?v=Su4gUKXR3BE&t=7s",
      Image: pe2,
    },
    {
      PBtn: "In-person & Virtual Event",
      header:
        "Tongston speaks at the Northeast University Students Peace Conference",
      date: "Nov 11, 2022",

      location: " Northeast university",
      eventLink: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      Image: pe3,
    },
    {
      PBtn: " In-person & Virtual Event",
      header:
        "Tongston SOSF International Day of Women and Girls in Science Competition",
      date: "Nov 11, 2022",

      location: "KaftenTv",
      eventLink: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      Image: pe4,
    },
    {
      PBtn: " Virtual Event",
      header:
        "Future of Education Summit 2022: How to incorporate entrepreneurship thinking",
      date: " Nov 13, 2022",

      location: "CNBC",
      eventLink: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      Image: pe5,
    },
    {
      PBtn: "In-person Event",
      header: "Education 2.0: Speaker Session - Engr. Bello Tongo",
      date: "March 23, 2022",

      location: "Dubai",
      eventLink: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      Image: pe6,
    },
    {
      PBtn: "In-person Event",
      header:
        "Start-up Session: Engr. Bello Tongo, CEO, Tongston Entrepreneurship Group",
      date: "March 23, 2022",

      location: "Dubai",
      eventLink: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      Image: pe7,
    },
    {
      PBtn: "In-person Event",
      header: "2022 Global Tongston Entrepreneurial Education Summit",
      date: "Sept 1, 2022",

      location: "Education Summit",
      eventLink: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      Image: pe8,
    },
    {
      PBtn: "Virtual Event",
      header:
        "The Tongston Entrepreneurial Thinking Podcast - Episode One Introduction",
      date: "June 12, 2022",

      location: "Youtube Podcast",
      eventLink: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      Image: pe9,
    },
    {
      PBtn: "Virtual Event",
      header: "Teachers, Re-imagine The Future (Tongston Webinar)",
      date: "Nov 25, 2022",

      location: "Youtube",
      eventLink: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      Image: pe10,
    },
    {
      PBtn: "Virtual Event",
      header: "2022 SOSF LEAD4CHANGE INNOVATORS INITIATIVE PITCH EVENT",
      date: "Dec 17, 2022",

      location: "Youtube",
      eventLink: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      Image: pe11,
    },
    {
      PBtn: "In-person Event",
      header: "TONGSTON ENTREPRENEURIAL EDUCATION SUMMIT 2022",
      date: "Nov 19, 2021",

      location: " HFCI North East Festival",
      eventLink: "https://www.youtube.com/watch?v=ZLZBbY9E8ME",
      Image: pe12,
    },
  ];

  return (
    <>
      <Header />
      <main>
        <h1 className="events-title">NEWS & EVENTS</h1>
        <section className="events-container">
          <div className="events-text-con">
            <h1>Welcome To TEES 2023 </h1>
            <p>Attend TEES 2023 as a delegate and look forward to ...</p>
            <div className="event-schedule">
              <p className="events-date"> DATE: 9th December. 2023 </p>
              <p className="events-time"> TIME: 9:00 AM WAT </p>
              <p className="events-location"> LOCATION: Zoom & YouTube </p>
            </div>
            {/* <a
              href="https://us06web.zoom.us/meeting/register/tZUoduuvrT0rGNzowFG2ig_qg3QjnQ_P4Fle#/registration"
              target="_blank"
              rel="noreferrer"
            >
              <button className="events-button1">REGISTER</button>
            </a> */}
          </div>
        </section>
        {/* body section */}
        <section className="events-body-con">
          <h1 className="events-body-heading">UPCOMING</h1>
          <UpcomingEvent />
        </section>

        {/* past event section  */}
        <section className="pastEvents-body-con">
          <h1 className="pastEvents-body-heading">PAST EVENTS</h1>

          <div className="pastEvents-cards">
            {pastEvents.map((pastEvent, id) => (
              <PastEventCard
                key={id}
                PBtn={pastEvent.PBtn}
                header={pastEvent.header}
                date={pastEvent.date}
                location={pastEvent.location}
                eventLink={pastEvent.eventLink}
                image={pastEvent.Image}
              />
            ))}
          </div>
        </section>
        <section>
          <MailingList />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Events;
