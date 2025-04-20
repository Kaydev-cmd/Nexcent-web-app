import React, { useState } from "react";
import "./Customers.css";

const customerTestimonials = {
  text: `Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.`,
  author: "Tim Smith",
  company: "British Dragon Boat Racing Association",
};

const customerLogos = [
  "Logo-7.png",
  "Logo-1.png",
  "Logo-2.png",
  "Logo-3.png",
  "Logo-4.png",
  "Logo-5.png",
];

const Customers = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => setShowFullText(!showFullText);

  const displayedText = showFullText
    ? customerTestimonials.text
    : `${customerTestimonials.text.slice(0, 250)}...`;
  return (
    <>
      <section className="customers" id="customers">
        <div className="container">
          <div className="content">
            <div className="text">
              <p>{displayedText}</p>
              <div className="toggle-btn">
                <button onClick={toggleText}>
                  {showFullText ? "Show Less" : "Read More"}
                </button>
              </div>
              <h4>{customerTestimonials.author}</h4>
              <p>
                <span>{customerTestimonials.company}</span>
              </p>
            </div>

            <div className="logos-and-link">
              {customerLogos.map((logo, index) => (
                <img
                  key={index}
                  src={`/images/home/${logo}`}
                  alt={`Company Logo ${index + 1}`}
                />
              ))}
              <p>
                <a href="">Meet all customers</a>
                <img src="/images/home/Right.png" alt="Right Arrow" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customers;
