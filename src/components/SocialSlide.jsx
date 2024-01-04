import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

function SocialSlide() {
  const [display, setDisplay] = useState(true);

  const displayToggle = () => setDisplay(!display);

  return (
    <section className="slideshow-container-body">
      <div className="slideshow-container">
        <div className="mySlides fad">
          {display ? (
            <div className="text ">
              <div>
                <h1 className="connect-us">Connect with Us</h1>
              </div>
              <div className="about-social d-flex">
                <div className="ab-social-container d-flex">
                  <div className="ab-social">
                    <RouterLink
                      target="_blank"
                      to="https://www.instagram.com/tongstoncompany/"
                      className="fa fa-sm fa-instagram"
                    ></RouterLink>
                  </div>
                  <div>
                    <h3>
                      Follow Us on <br />
                      Instagram
                    </h3>
                  </div>
                </div>
                <div className="ab-social-container d-flex">
                  <div className="ab-social">
                    <RouterLink
                      target="_blank"
                      to="https://www.youtube.com/@tongstonentrepreneurshipgr7"
                      className="fa fa-sm fa-youtube"
                    ></RouterLink>
                  </div>
                  <div>
                    <h3>
                      Subscribe to our <br /> Youtube Page
                    </h3>
                  </div>
                </div>
                <div className="ab-social-container d-flex">
                  <div className="ab-social">
                    <RouterLink
                      target="_blank"
                      to="https://web.facebook.com/tongstoncompany/?_rdc=1&_rdr"
                      className="fa fa-sm fa-facebook"
                    ></RouterLink>
                  </div>
                  <div>
                    <h3>
                      Check out our <br /> Facebook Page
                    </h3>
                  </div>
                </div>
              </div>
              <div className="about-social down-social d-flex">
                <div className="ab-social-container d-flex">
                  <div className="ab-social">
                    <RouterLink
                      target="_blank"
                      to="https://twitter.com/tongstoncompany"
                      className="fa-brands fa-x-twitter"
                    ></RouterLink>
                  </div>
                  <div>
                    <h3>
                      Follow Us on <br /> Twitter
                    </h3>
                  </div>
                </div>
                <div className="ab-social-container d-flex">
                  <div className="ab-social">
                    <RouterLink
                      target="_blank"
                      to="https://www.linkedin.com/company/tongston/"
                      className="fa fa-sm fa-linkedin"
                    ></RouterLink>
                  </div>
                  <div>
                    <h3>
                      Find Us on <br /> Linkedin
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text ">
              <div>
                <h3 className="connect-us">Connect with Us</h3>
              </div>
              <div className="about-social d-flex">
                <div className="ab-social-container d-flex">
                  <div className="ab-social">
                    <RouterLink
                      to="/contact"
                      className="fa-sharp fa-solid fa-comments"
                    ></RouterLink>
                  </div>
                  <div>
                    <h3>Chat with Us</h3>
                  </div>
                </div>
                {/* <div className="ab-social-container d-flex">
                  <div className="ab-social">
                    <RouterLink
                      target="_blank"
                      to="https://tongston.com/blog/"
                      className="fa-solid fa-book-open"
                    ></RouterLink>
                  </div>
                  <div>
                    <h3>
                      Access Insights <br /> on Our Blog
                    </h3>
                  </div>
                </div> */}
                <div className="ab-social-container d-flex">
                  <div className="ab-social">
                    <RouterLink
                      to="tel:+234 816 560 2923"
                      className="fa-solid fa-phone"
                    ></RouterLink>
                  </div>
                  <div>
                    <h3>
                      Call Us On <br />
                      +234 816 560 2923
                    </h3>
                  </div>
                </div>
              </div>
              <div className="about-social down-social d-flex">
                <div className="ab-social-container d-flex">
                  <div className="ab-social">
                    <RouterLink
                      target="_blank"
                      to="https://open.spotify.com/show/5myLgem74ziFBazrQjgbLZ"
                      className="fa-solid fa-microphone"
                    ></RouterLink>
                  </div>
                  <div>
                    <h3>
                      Listen to Our <br /> Podcast
                    </h3>
                  </div>
                </div>
                <div className="ab-social-container d-flex">
                  <div className="ab-social">
                    <RouterLink
                      target="_blank"
                      to="mailto:info@tongston.com"
                      className="fa-solid fa-pen"
                    ></RouterLink>
                  </div>
                  <div>
                    <h3>
                      Write to Us <br /> via Email
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="ab-socials prev fa-solid fa-arrow-left "
          onClick={displayToggle}
        ></div>
        <div
          className="ab-socials next fa-solid fa-arrow-right"
          onClick={displayToggle}
        ></div>
      </div>
      <br />
    </section>
  );
}
export default SocialSlide;
