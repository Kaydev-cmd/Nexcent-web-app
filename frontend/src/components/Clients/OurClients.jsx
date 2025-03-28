import React from "react";
import "./OurClients.css";

const clientLogos = [
  "/images/home/Logo.png",
  "/images/home/Logo-1.png",
  "/images/home/Logo-2.png",
  "/images/home/Logo-3.png",
  "/images/home/Logo-4.png",
  "/images/home/Logo-5.png",
  "/images/home/Logo-6.png",
];

const OurClients = () => {
  return (
    <>
      <section className="our-clients" id="ourClients">
        <div className="container">
          <div className="our-clients-content">
            <div className="text">
              <h2>Our Clients</h2>
              <p>We have been working with some Fortune 500&#43; clients</p>
            </div>
            <div className="our-clients-content-icons">
              {clientLogos.map((logo, index) => (
                <img key={index} src={logo} alt={`Company Logo ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClients;
