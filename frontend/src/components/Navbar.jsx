// import React from 'react'
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  return (
    // Ticket #1: Add dropdown using useState
    <section className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="navbar-header-wrapper">
            <div className="navbar-header">
              <a href="/">
                <div className="navbar-logo-wrapper">
                  <div className="navbar-logo">
                    <img src="/images/home/Icon.png" alt="Nexcent Logo" />
                  </div>
                </div>
                <div className="navbar-heading-wrapper">
                  <div className="navbar-heading">
                    <h1>Nexcent</h1>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="navbar-links-wrapper">
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
          </div>
          <div className="navbar-btns-wrapper">
            <div className="navbar-btns">
              <div className="navbar-login-btn-wrapper">
                <div className="navbar-login-btn">
                  <button>Login</button>
                </div>
              </div>
              <div className="navbar-signup-btn-wrapper">
                <div className="navbar-signup-btn">
                  <button>Sign up</button>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-menu-wrapper">
            <div className="hamburger-menu">
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
