import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  showErrorNotification,
  showSuccessNotification,
} from "./Notification/Notification";


const MailingList = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // send email using emailjs
    const templateParams = {
      name: name,
      email: email,
    };

    emailjs
      .send(
        "service_z3uzwhg",
        "template_nr3ypow",
        templateParams,
//Api key
        "CDmJ3huYpinZb0wEA"
      )
      .then((response) => {
        setName("");
        setEmail("");
        setLoading(false);
        showSuccessNotification("Subscription successful!");
      })
      .catch((error) => {
        showErrorNotification("Subscription failed, please try again");
        setLoading(false);
      });
  };

  return (
    <section className="insight-subscribe">
      <div className="insight-subscribe-con">
        <div className="insight-subscribe-text">
          <h1>Get Latest Updates</h1>
          <p>
            Don’t miss out on important information. Subscribe to the latest
            updates
          </p>
          <form onSubmit={handleSubmit} >
            <div className="form-input-con">
              <input
                className="insight-subscribe-form-input"
                type="text"
                name=" name"
                value={name}
                placeholder="Full Name"
                onChange={(event) => setName(event.target.value)}
                required
              />
              <input
                className="insight-subscribe-form-input"
                type="email"
                name="user_email"
                value={email}
                placeholder="Email address"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="insight-subscribe-form-submit">
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MailingList;
