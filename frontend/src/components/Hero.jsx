// Map Hero...

// import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Required Modules
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 12000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div className="hero-content">
              <div className="hero-left-content">
                <div className="text">
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
                <button className="register-btn">Register</button>
              </div>
              <img
                src="/images/home/Illustration.png"
                alt="Hero Illustration"
                className="hero-banner"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-content">
              <div className="hero-left-content">
                <div className="text">
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
                <button className="register-btn">Register</button>
              </div>
              <img
                src="/images/home/Illustration.png"
                alt="Hero Illustration"
                className="hero-banner"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-content">
              <div className="hero-left-content">
                <div className="text">
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
                <button className="register-btn">Register</button>
              </div>
              <img
                src="/images/home/Illustration.png"
                alt="Hero Illustration"
                className="hero-banner"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
