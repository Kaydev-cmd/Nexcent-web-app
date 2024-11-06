// import React from 'react'
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer-content-wrapper">
            <div className="footer-content">
              <div className="footer-left-content-wrapper">
                <div className="footer-left-content">
                  <div className="footer-left-content-heading-and-logo-wrapper">
                    <div className="footer-left-content-heading-and-logo">
                      <a href="">
                        <img src="/images/home/Icon.png" alt="Company Logo" />
                        <h2>Nexcent</h2>
                      </a>
                    </div>
                  </div>
                  <div className="footer-left-content-text-wrapper">
                    <div className="footer-left-content-text">
                      <p>Copyright &copy; 2020 Nexcent Ltd.</p>
                      <p>All rights reserved</p>
                    </div>
                  </div>
                  <div className="footer-left-content-icons-wrapper">
                    <div className="footer-left-content-icons">
                      <a href="">
                        <img
                          src="/images/home/Social Icons-instagram.png"
                          alt="Instagram"
                        />
                      </a>
                      <a href="">
                        <img
                          src="/images/home/Social Icons-1.png"
                          alt="Dribble"
                        />
                      </a>
                      <a href="">
                        <img
                          src="/images/home/Social Icons-twitter.png"
                          alt="Twitter"
                        />
                      </a>
                      <a href="">
                        <img
                          src="/images/home/Social Icons-youtube.png"
                          alt="Youtube"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-right-content-wrapper">
                <div className="footer-right-content">
                  <div className="footer-right-company-content-wrapper">
                    <div className="footer-right-company-content">
                      <div className="footer-right-company-content-heading-wrapper">
                        <div className="footer-right-company-content-heading">
                          <h3>Company</h3>
                        </div>
                      </div>
                      <div className="footer-right-company-content-links-wrapper">
                        <div className="footer-right-company-content-links">
                          <p>
                            <a href="">About Us</a>
                          </p>
                          <p>
                            <a href="">Blog</a>
                          </p>
                          <p>
                            <a href="">Contact Us</a>
                          </p>
                          <p>
                            <a href="">Pricing</a>
                          </p>
                          <p>
                            <a href="">Testimonials</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-right-support-content-wrapper">
                    <div className="footer-right-support-content">
                      <div className="footer-right-support-content-heading-wrapper">
                        <div className="footer-right-support-content-heading">
                          <h3>Support</h3>
                        </div>
                      </div>
                      <div className="footer-right-support-content-links-wrapper">
                        <div className="footer-right-support-content-links">
                          <p>
                            <a href="">Help center</a>
                          </p>
                          <p>
                            <a href="">Terms of service</a>
                          </p>
                          <p>
                            <a href="">Legal</a>
                          </p>
                          <p>
                            <a href="">Privacy policy</a>
                          </p>
                          <p>
                            <a href="">Status</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-right-stay-up-to-date-content-wrapper">
                    <div className="footer-right-stay-up-to-date-content">
                      <div className="footer-right-stay-up-to-date-content-heading-wrapper">
                        <div className="footer-right-stay-up-to-date-content-heading">
                          <h3>Stay up to date</h3>
                        </div>
                      </div>
                      <div className="footer-right-stay-up-to-date-content-email-address-wrapper">
                        <div className="footer-right-stay-up-to-date-content-email-address">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Your email address"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
