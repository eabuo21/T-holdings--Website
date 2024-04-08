/** @format */

import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "../../assets/css/contact.css";
import "../../assets/css/3D  Scale/3D-Scale.css";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../components/Notification/Notification";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // send email using emailjs
    const templateParams = {
      name: name,
      email: email,
      number: number,
      select: select,
      message: message,
    };

    emailjs
      .send(
        "service_z3uzwhg",
        "template_0xr9dvi",
        templateParams,
        "CDmJ3huYpinZb0wEA"
      )
      .then((response) => {
        setLoading(false);
        showSuccessNotification("Success!  Message Sent Successfully.");
        setName("");
        setEmail("");
        setNumber("");
        setSelect("");
        setMessage("");
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("Error Sending Message, please try again.");
        console.error("Error sending email:", error);
      });
  };

  //SEO optimization

  const PrimaryKeywords =
    "tongston entrepreneurship group, entrepreneurial education, enterprise development,business consulting, financial services, legal services, public relations, data and research, online events management";
  //secondary keywords goes here

  const SecondaryKeywords =
    "startups,SMEs, Africa, Nigeria, investment, growth, innovation, impact, sustainability, branding, ";
  //long-tail keywords goes here

  const Longtailkeywords =
    "entrepreneurial education programs in nigeria, business consulting services for startups in africa, financial services for small and medium enterprises, legal compliance for businesses in nigeria,  public relations for entrepreneurs, data analysis for businesses, online events management platform";

  return (
    <>
    {/*}
      <Helmet>
        <title> Contact Us</title>
        <meta name="primary-keywords" content={PrimaryKeywords} />
        <meta name="secondary-keywords" content={SecondaryKeywords} />
        <meta name="long-tail-keywords" content={Longtailkeywords} />

        <meta
          name="description"
          content=" We're glad you are here! Share your details with us to get started"
        />
        <meta property="og:title" content="Contact Us" />

        <meta
          property="0g:description"
          content="We're glad you are here! Share your details with us to get started"
        />
        <meta property="og:url" content="https://tongston.com/contact" />
      </Helmet>   */}
      
      <div className="fade-in-contact">
        <Header />
        <div className="contact">
          <main className="main-contact">
            <div className="get-intouch-section">
              <h1 className="get-intouch">Let's Get in Touch</h1>
              <p className="get-intouch-text">
                We're glad you are here! Share your details with us to get
                started
              </p>
            </div>
            <div className="container-information">
              <div className="main-information">
                <div className="box contact-information">
                  <div className="contact-information-content">
                    <div className="contact-heading">
                      <h2>Contact Information</h2>
                      <p>
                        Please fill the form and our team will get back to you
                        shortly
                      </p>
                    </div>
                    <div className="contact-number">
                      <span>
                        <i className="fa fa-xl fa-light fa-phone  fonticon-colour"></i>
                      </span>
                      <span className="contact-margin">
                        <a className="black-link" href="tel=+2348165602923">
                          +2348165602923
                        </a>
                      </span>
                    </div>
                    <div className="contact-Address">
                      <div className="contact-number">
                        <span>
                          <i className="fa fa-light fa-xl fa-map-marker fonticon-colour "></i>
                        </span>
                        <span className="contact-margin">
                          16 Emeka Anyaoku Street, Area 11 Garki, Abuja
                        </span>
                      </div>
                      {/*  <div className="adress-magin">
                        <p className="contact-margin">
                          5th floor, 80 Broad Street, New York City, 10004
                        </p>
                        <p className="contact-margin">
                          107-111 Fleet Street, London, EC4A 2AB
                        </p>
                        <p className="contact-margin">
                          Spaces Clarke Quay, 4th - 6th Floor, 21 Merchant Road,
                          Singapore, 58267
                        </p>
                      </div>*/}
                    </div>
                    <div className="contact-email">
                      <span>
                        <i className="fa fa-xl fa-envelope fonticon-colour"></i>
                      </span>
                      <span className="contact-margin">
                        <a
                          className="black-link"
                          href="mailto:info@tongston.com"
                        >
                          info@tongston.com
                        </a>
                      </span>
                    </div>
                    <br />
                    <div className="contact-social">
                      <div className="contact-socail-links">
                        {" "}
                        <a
                          href="https://web.facebook.com/tongstoncompany/?_rdc=1&_rdr"
                          className="fa fa-sm fa-facebook"
                        ></a>
                      </div>
                      <div className="contact-socail-links">
                        <a
                          href="https://www.youtube.com/@tongstonentrepreneurshipgr7"
                          className="fa fa-youtube"
                        ></a>
                      </div>
                      <div className="contact-socail-links">
                        {" "}
                        <a
                          href="https://instagram.com/tongstoncompany?igshid=YmMyMTA2M2Y="
                          className="fa fa-instagram"
                        ></a>
                      </div>
                      <div className="contact-socail-links">
                        <a
                          href=" https://twitter.com/tongstoncompany"
                          className="fa-brands fa-x-twitter "
                        ></a>
                      </div>
                      <div className="contact-socail-links">
                        <a
                          href="https://www.linkedin.com/company/tongston/"
                          className="fa fa-linkedin"
                        ></a>
                      </div>
                      <div className="contact-socail-links">
                        <a
                          href="mailto:info@tongston.com"
                          className="fa fa-envelope"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Contact Form*/}
                <form onSubmit={handleSubmit} className="input-information">
                  <section className="input-infromation-content">
                    <div className="name-email">
                      <div>
                        <label htmlFor="text" className="">
                          Full Name
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form__field"
                          placeholder="Write Your Full Name"
                          name="name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          id="text"
                          required
                        />
                      </div>
                      <br />

                      <div>
                        <label htmlFor="number" className="">
                          Phone Number
                        </label>
                      </div>
                      <div>
                        <input
                          type="tel"
                          className="form__field"
                          placeholder="Write Your Phone Number"
                          name="number"
                          value={number}
                          onChange={(event) => setNumber(event.target.value)}
                          id="number"
                          required
                        />
                      </div>
                    </div>
                    <br />

                    <div className="two-colums">
                      <div>
                        <label htmlFor="email" className="">
                          Email Address
                        </label>
                      </div>
                      <div>
                        <input
                          type="email"
                          className="form__field"
                          placeholder="example@gmail.com"
                          name="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          id="email"
                          required
                        />
                      </div>

                      <select
                        id="form-select"
                        name="select"
                        value={select}
                        onChange={(event) => setSelect(event.target.value)}
                        className="form__field "
                        aria-label=""
                        required
                      >
                        <option defaultValue="none-selected">
                          I'm interested in ...
                        </option>
                        <option value="Participating in TEES 2024">
                          Participating in TEES 2024
                        </option>
                        <option
                          value="Investing in Tongston and it’s intrapreneur and
                          entrepreneurs"
                        >
                          Investing in Tongston and it’s intrapreneur and
                          entrepreneurs
                        </option>
                        <option value="Experiencing Tongston’s Products or Services">
                          Experiencing Tongston’s Products or Services
                        </option>
                        <option value="Partnering with Tongston">
                          Partnering with Tongston{" "}
                        </option>
                        <option value="others">Others.. Please Specify</option>
                      </select>
                    </div>
                  </section>
                  <div>
                    <label htmlFor="Message" className="contact-btn-message">
                      Message
                    </label>
                  </div>
                  <div>
                    <textarea
                      type="text"
                      className="form__field contact-btn-message"
                      placeholder="Write Your Message"
                      name="message"
                      value={message}
                      id="Message"
                      required
                      onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                  </div>
                  <div className="contact-submit">
                    <button
                      type="submit"
                      className="contact-btn-submit contact-subscribe-form-submit"
                    >
                      {loading ? <b>Loading...</b> : <b>Send Message </b>}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
