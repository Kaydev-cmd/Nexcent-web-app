import React from "react";
import { LearnMoreButton } from "./LearnMoreButton";
import "./LearnMore.css";

const LearnMore = ({ title, description, imageUrl }) => {
  return (
    <>
      <section className="learn-more" id="learnMore">
        <div className="container">
          <div className="learn-more-content">
            <img
              src={imageUrl}
              alt="Illustration"
              className="learn-more-image"
            />
            <div className="right-wrapper">
              <div className="text">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <LearnMoreButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

LearnMore.defaultProps = {
  title: "The unseen of spending three years at Pixelgrade",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
  imageUrl: "/images/home/rafiki.png",
};

export default LearnMore;
