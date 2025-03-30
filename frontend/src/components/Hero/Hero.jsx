// Map Hero...

// import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Required Modules
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const slidesData = [
  {
    id: 1,
    title: "Lessons and insights",
    highlight: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    image: "/images/home/Illustration.png",
    buttonText: "Register",
  },
  {
    id: 2,
    title: "Discover new strategies",
    highlight: "to boost engagement",
    description:
      "How to connect with your audience through effective storytelling.",
    image: "/images/home/Illustration.png",
    buttonText: "Learn More",
  },
  {
    id: 3,
    title: "Mastering content creation",
    highlight: "like a pro",
    description:
      "Build a strong brand identity with high-quality visuals and design.",
    image: "/images/home/Illustration.png",
    buttonText: "Get Started",
  },
];

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
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="hero-content">
                <div className="hero-left-content">
                  <div className="text">
                    <h1>
                      {slide.title}
                      <br />
                      <span>
                        <p>{slide.highlight}</p>
                      </span>
                    </h1>
                    <p>{slide.description}</p>
                  </div>
                  <button className="register-btn">{slide.buttonText}</button>
                </div>
                <img
                  src={slide.image}
                  alt="Hero Illustration"
                  className="hero-banner"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
