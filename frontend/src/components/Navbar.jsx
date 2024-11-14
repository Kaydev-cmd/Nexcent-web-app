// import React from 'react'
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  return (
    // Ticket #1: Add dropdown using useState
    <section className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <a href="/">
              <img src="/images/home/Icon.png" alt="Nexcent Logo" />
              <h1>Nexcent</h1>
            </a>
          </div>
          <div className="navbar-links">
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Feature</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Testimonial</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navbar-btns">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign up</button>
          </div>
          <RxHamburgerMenu className="menu" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
