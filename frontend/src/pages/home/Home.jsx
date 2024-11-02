// import React from 'react'
import "./Home.css";

export const Home = () => {
  return (
    <>
      {/* Hero */}
      {/* Ticket #1: Add interactive swiper */}
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
    </>
  );
};

export default Home;
