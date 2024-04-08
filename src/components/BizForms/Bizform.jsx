/** @format */
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../Notification/Notification";
import "../../components/BizForms/Forms.css";
import ReCAPTCHA from "react-google-recaptcha";

const BizForm = ({ onClose }) => {
  //let us   handle the emailjs form capture  here

  const [orgname, setOrgName] = useState("");
  const [contctperson, setContctPerson] = useState("");
  const [conatcemail, setContactEmail] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const recaptchaRef = useRef(null);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [loading, setLoading] = useState(false);

  const options = [
    " Impact /Sustainability Design & Assessment",
    " Data Analysis consulting",
    "  Data science Consulting",
    "  App / Website Design & Development",
    "  Software solutions - Cloud AI Business Solutions",
    "  Monitoring, evaluation & Learning [Base-Line, Mid-Line &End-Line Process Evaluation]",
    " ICT & Programming Skills Training",
    " Branding- Online Presence[Social media Presence ; Website);collateral; Logo; Promotional Material ]",
    " Multimedia Content Production [3D Animation; 3D Animation; Documentaries; Introduction videos]",
    " Virtual Office & Workspace Solutions",
    " Training & Meeting room Solutions",
    " Curriculum Design & Development Consulting",
    " Educational Curriculum Design Delivery , Monitoring & Evaluation &and Showcase",
    "  E-learning Content Production & Platform Development",
    " Documentation & Production for Marketing & Legacy Showcase",
    " Industry & Market Research",
    " MSME Intervention Design & Deployment",
    " Business Advisory",
    " Governance Advisory",
  ];

  const DropdownOptions = () => {
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!recaptchaValue) {
      showErrorNotification("Please complete the reCAPTCHA verification.");
      return;
    }
    setLoading(true);

    const templateParms = {
      orgname: orgname,
      contctperson: contctperson,
      conatcemail: conatcemail,
      address: address,
      service: service,
      phone: phone,
      date: date,
    };
    emailjs
      .send(
        "service_z3uzwhg",
        "template_a4ec58b",
        templateParms,
        "CDmJ3huYpinZb0wEA"
      )
      .then((Response) => {
        setLoading(false);
        showSuccessNotification(" request sent successfully ");
        setOrgName("");
        setContctPerson("");
        setContactEmail("");
        setAddress("");
        setService("");
        setPhone("");
        setDate("");
        setRecaptchaValue(null); // Reset reCAPTCHA value
        // Reset the reCAPTCHA widget
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      })

      .catch((error) => {
        setLoading(false);
        showErrorNotification("Request failed please check connection");
      });
  };
  return (
    <>
      <div
        className="  container-items "
        style={{
          position: "fixed",
          inset: "0",
        }}
      >
        <div
          className="modal-overlay"
          style={{
            background: "black",
            opacity: "0.8",
            inset: "0",
            position: "absolute",
          }}
        ></div>

        <section
          className="items-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "2rem",
          }}
        >
          <button
            onClick={onClose}
            className="close-modal-button"
            style={{
              background: "red",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
              border: "none",
              padding: "0.4rem",
              fontSize: "30px",
              position: "relative",
              top: "2rem",
            }}
          >
            {" "}
            &times;
          </button>

          {/* the div containing th video at the background */}

          <div data-aos="flip-right" className="video-background">
            <section
              className="heading-rider"
              style={{
                background: "red",
                width: "50%",
                padding: "0.2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "14px",
                marginBottom: "1rem",
              }}
            >
              <h3> Request a Service </h3>
            </section>

            {/*fomr element goes in heree*/}

            <form onSubmit={handleSubmit} className="contact-form-service ">
              <label id="label-toast">
                Name of Organization
                <input
                  type="text"
                  value={orgname}
                  placeholder="Name of organization"
                  className="form-input-field"
                  onChange={(event) => setOrgName(event.target.value)}
                  required
                />
              </label>

              <label id="label-toast">
                Contact Person
                <input
                  type="text"
                  value={contctperson}
                  placeholder="Contact Person"
                  className="form-input-field"
                  onChange={(event) => setContctPerson(event.target.value)}
                  required
                />
              </label>

              <label id="label-toast">
                Contact Email
                <input
                  type="email"
                  value={conatcemail}
                  placeholder="Contact Email"
                  className="form-input-field"
                  onChange={(event) => setContactEmail(event.target.value)}
                  required
                />
              </label>

              <label id="label-toast">
                Phone Number
                <input
                  type="tel"
                  value={phone}
                  placeholder="Phone Number"
                  className="form-input-field"
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </label>

              <label id="label-toast">
                Address
                <input
                  type="text"
                  value={address}
                  placeholder="Address"
                  className="form-input-field"
                  onChange={(event) => setAddress(event.target.value)}
                  required
                />
              </label>

              <label id="label-toast">
                Expected Service Delivery Date
                <input
                  type="date"
                  value={date}
                  placeholder="Expected Service Delivery Date"
                  className="form-input-field"
                  onChange={(event) => setDate(event.target.value)}
                  required
                />
              </label>

              <label id="label-toast">
                Service Requied
                <select
                  className="select-box"
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                >
                  <option disabled> service Required </option>
                  <DropdownOptions />
                </select>
              </label>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LfyBg4pAAAAAK2lT4J7KmjcQC9FJENGHbS9SpJL"
                onChange={handleRecaptchaChange}
                width="30px"
                height="30px"
              />

              <section className="submit-form-button-section">
                <button type="submit">
                  {loading ? (
                    <b className="animate-pulse"> Submitting ...</b>
                  ) : (
                    <b> Submit</b>
                  )}
                </button>
              </section>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
export default BizForm;
