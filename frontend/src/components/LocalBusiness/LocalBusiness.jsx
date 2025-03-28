import React from "react";
import "./LocalBusiness.css";
import { LearnMoreButton } from "../LearnMore/LearnMoreButton";

const LocalBusiness = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <>
      <section className="local-business" id="localBusiness">
        <div className="container">
          <div className="local-business-content">
            <img src={imageSrc} alt={imageAlt} className="business-image" />
            <div className="right-wrapper">
              <div className="text">
                <h2>{title}</h2>
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <LearnMoreButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

LocalBusiness.defaultProps = {
  title: "How to design your footer like we did",
  description: [
    "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.",
    "Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.",
    "In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.",
    "Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
  ],
  imageSrc: "/images/home/pana.png",
  imageAlt: "Illustration",
};

export default LocalBusiness;
