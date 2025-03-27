// import React from 'react'
import { useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen((prev) => !prev);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#" },
    { name: "Features", path: "#" },
    { name: "Products", path: "#" },
    { name: "Testimonials", path: "#" },
    { name: "FAQs", path: "#" },
  ];
  return (
    <section className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <a href="/">
              <img src="/images/home/Icon.png" alt="Nexcent Logo" />
              <h1>Nexcent</h1>
            </a>
          </div>

          <nav className={`navbar-links ${navOpen ? "open" : ""}`}>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar-btns">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign up</button>
          </div>
          <button onClick={toggleNav} className="menu-toggle" hidden>
            {navOpen ? (
              <AiOutlineClose size={30} color="#4caf4f" />
            ) : (
              <RxHamburgerMenu size={30} color="#4caf4f" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className={`mobile-menu ${navOpen ? "open" : ""}`}>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} onClick={toggleNav}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
