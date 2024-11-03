// import React from 'react'
import "./Home.css";
import { LearnMoreButton } from "../../components/LearnMoreButton";

export const Home = () => {
  return (
    <>
      {/* Hero */}
      {/* Ticket #1: Add interactive swiper */}
      {/* Ticket #2: Add interactive navigation for links across the page */}
      <section className="hero">
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <div className="hero-left-content-wrapper">
                <div className="hero-left-content">
                  <div className="hero-left-content-text-wrapper">
                    <div className="hero-left-content-text">
                      <h1>
                        Lessons and insights
                        <br />
                        <span>
                          <p>from 8 years</p>
                        </span>
                      </h1>
                      <p>
                        Where to grow your business as a photographer: site or
                        social media?
                      </p>
                    </div>
                  </div>
                  <div className="hero-left-content-btn-wrapper">
                    <div className="hero-left-content-btn">
                      <div className="register-btn-wrapper">
                        <div className="register-btn">
                          <button>Register</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-right-content-wrapper">
                <div className="hero-right-content">
                  <div className="hero-right-content-banner-wrapper">
                    <div className="hero-right-content-banner">
                      <img
                        src="/images/home/Illustration.png"
                        alt="Hero Illustration"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-content-swiper-icons-wrapper">
            <div className="hero-content-swiper-icons">
              <img src="/images/home/Dot.png" alt="Swiper Icons" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="our-clients">
        <div className="container">
          <div className="our-clients-content-wrapper">
            <div className="our-clients-content">
              <div className="our-clients-content-text-wrapper">
                <div className="our-clients-content-text">
                  <h2>Our Clients</h2>
                  <p>We have been working with some Fortune 500&#43; clients</p>
                </div>
              </div>
              <div className="our-clients-content-icons-wrapper">
                <div className="our-clients-content-icons">
                  <img src="/images/home/Logo.png" alt="Company Logo" />
                  <img src="/images/home/Logo-1.png" alt="Company Logo" />
                  <img src="/images/home/Logo-2.png" alt="Company Logo" />
                  <img src="/images/home/Logo-3.png" alt="Company Logo" />
                  <img src="/images/home/Logo-4.png" alt="Company Logo" />
                  <img src="/images/home/Logo-5.png" alt="Company Logo" />
                  <img src="/images/home/Logo-6.png" alt="Company Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manage */}
      <section className="manage">
        <div className="container">
          <div className="manage-content-wrapper">
            <div className="manage-content">
              <div className="manage-content-text-wrapper">
                <div className="manage-content-text">
                  <h2>
                    Manage your entire community
                    <br />
                    in a single system
                  </h2>
                  <p>Who is Nextcent suitable for?</p>
                </div>
              </div>
              <div className="manage-content-cards-wrapper">
                <div className="manage-content-cards">
                  {/* Card */}
                  <div className="manage-content-card-wrapper">
                    <div className="manage-content-card">
                      <div className="manage-content-card-logo-wrapper">
                        <div className="manage-content-card-logo">
                          <img src="/images/home/Icon7.png" alt="Users" />
                        </div>
                      </div>
                      <div className="manage-content-card-text-wrapper">
                        <div className="manage-content-card-text">
                          <h3>
                            Membership
                            <br />
                            Organisations
                          </h3>
                          <p>
                            Our membership management
                            <br />
                            software provides full automation of
                            <br />
                            membership renewals and payments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="manage-content-card-wrapper">
                    <div className="manage-content-card">
                      <div className="manage-content-card-logo-wrapper">
                        <div className="manage-content-card-logo">
                          <img src="/images/home/Icon-8.png" alt="Building" />
                        </div>
                      </div>
                      <div className="manage-content-card-text-wrapper">
                        <div className="manage-content-card-text">
                          <h3>
                            National
                            <br />
                            Associations
                          </h3>
                          <p>
                            Our membership management
                            <br />
                            software provides full automation of
                            <br />
                            membership renewals and payments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="manage-content-card-wrapper">
                    <div className="manage-content-card">
                      <div className="manage-content-card-logo-wrapper">
                        <div className="manage-content-card-logo">
                          <img src="/images/home/Icon-9.png" alt="Hands" />
                        </div>
                      </div>
                      <div className="manage-content-card-text-wrapper">
                        <div className="manage-content-card-text">
                          <h3>
                            Clubs And
                            <br />
                            Groups
                          </h3>
                          <p>
                            Our membership management
                            <br />
                            software provides full automation of
                            <br />
                            membership renewals and payments
                          </p>
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

      {/* Learn More */}
      <section className="learn-more">
        <div className="container">
          <div className="learn-more-content-wrapper">
            <div className="learn-more-content">
              <div className="learn-more-left-content-wrapper">
                <div className="learn-more-left-content">
                  <div className="learn-more-left-content-banner-wrapper">
                    <div className="learn-more-left-content-banner">
                      <img src="/images/home/rafiki.png" alt="Illustration" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="learn-more-right-content-wrapper">
                <div className="learn-more-right-content">
                  <div className="learn-more-right-content-text-wrapper">
                    <div className="learn-more-right-content-text">
                      <h2>
                        The unseen of spending three
                        <br />
                        years at Pixelgrade
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet justo ipsum. Sed
                        <br />
                        accumsan quam vitae est varius fringilla. Pellentesque
                        placerat vestibulum lorem sed
                        <br />
                        porta. Nullam mattis tristique iaculis. Nullam pulvinar
                        sit amet risus pretium auctor. Etiam
                        <br />
                        quis massa pulvinar, aliquam quam vitae, tempus sem.
                        Donec elementum pulvinar odio.
                      </p>
                    </div>
                  </div>
                  <LearnMoreButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
