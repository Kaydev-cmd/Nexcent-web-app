// import React from 'react'
import "./Home.css";

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
    </>
  );
};

export default Home;
