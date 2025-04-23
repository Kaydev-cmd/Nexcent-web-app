import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const socialMediaLinks = [
  {
    alt: "Instagram",
    src: "/images/home/Social Icons-instagram.png",
    href: "#",
  },
  {
    alt: "Dribble",
    src: "/images/home/Social Icons-1.png",
    href: "#",
  },
  {
    alt: "Twitter",
    src: "/images/home/Social Icons-twitter.png",
    href: "#",
  },
  {
    alt: "YouTube",
    src: "/images/home/Social Icons-youtube.png",
    href: "#",
  },
];

const footerLinks = {
  company: ["About Us", "Blog", "Contact Us", "Pricing", "Testimonials"],
  support: [
    "Help center",
    "Terms of service",
    "Legal",
    "Privacy Policy",
    "Status",
  ],
};

const FooterLinkSection = ({ title, links }) => (
  <div className="footer-section">
    <h3>{title}</h3>
    <div className="links">
      {links.map((link, index) => (
        <p key={index}>
          <a href="#" aria-label={link}>
            {link}
          </a>
        </p>
      ))}
    </div>
  </div>
);

FooterLinkSection.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (email.trim()) {
      alert(`Subscribed with ${email}`);
      setEmail("");
    }
  };

  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="content">
            <div className="left-content">
              <a href="/" className="brand">
                <img src="/images/home/Icon.png" alt="Company Logo" />
                <h2>Nexcent</h2>
              </a>
              <div className="text">
                <p>Copyright &copy; 2020 Nexcent Ltd.</p>
                <p>All rights reserved</p>
              </div>
              <div className="icons">
                {socialMediaLinks.map((icon, index) => (
                  <a href={icon.href} key={index} aria-label={icon.alt}>
                    <img src={icon.src} alt={icon.alt} />
                  </a>
                ))}
              </div>
            </div>

            <div className="right-content">
              <FooterLinkSection title="Company" links={footerLinks.company} />
              <FooterLinkSection title="Support" links={footerLinks.support} />
              <div className="footer-section stay-up-to-date">
                <h3>Stay up to date</h3>
                <form onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your email address"
                    aria-label="Email address"
                    required
                  />
                  <div className="subscribe-btn">
                    <button type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
