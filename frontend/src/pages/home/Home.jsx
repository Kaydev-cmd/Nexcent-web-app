import React from "react";
import "./Home.css";
// import { LearnMoreButton } from "../../components/LearnMoreButton";
import { Hero } from "../../components/Hero";
import { MarketingCards } from "../../components/MarketingCards";
import OurClients from "../../components/Clients/OurClients";
import Manage from "../../components/Manage/Manage";
import LearnMore from "../../components/LearnMore/LearnMore";
import ReInvent from "../../components/ReInvent/ReInvent";
import LocalBusiness from "../../components/LocalBusiness/LocalBusiness";

export const Home = () => {
  return (
    <>
      <Hero />
      <OurClients />
      <Manage />
      <LearnMore />
      <ReInvent />
      <LocalBusiness />

      {/* Customers */}
      <section className="customers" id="customers">
        <div className="container">
          <div className="customers-content-wrapper">
            <div className="customers-content">
              <div className="text">
                <p>
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                  lobortis sem dui, vel rutrum risus
                  <br />
                  tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero
                  ornare, tristique quam in, gravida
                  <br />
                  enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                  laoreet elit at ligula molestie, nec molestie
                  <br />
                  mi blandit. Suspendisse cursus tellus sed augue ultrices, quis
                  tristique nulla sodales. Suspendisse
                  <br />
                  eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
                  Quisque malesuada enim sapien,
                  <br />
                  vitae placerat ante feugiat eget. Quisque vulputate odio
                  neque, eget efficitur libero condimentum
                  <br />
                  id. Curabitur id nibh id sem dignissim finibus ac sit amet
                  magna.
                </p>
                <h4>Tim Smith</h4>
                <p>
                  <span>British Dragon Boat Racing Association</span>
                </p>
              </div>
              <div className="logos-and-link">
                <img src="/images/home/Logo-7.png" alt="Company Logo" />
                <img src="/images/home/Logo-1.png" alt="Company Logo" />
                <img src="/images/home/Logo-2.png" alt="Company Logo" />
                <img src="/images/home/Logo-3.png" alt="Company Logo" />
                <img src="/images/home/Logo-4.png" alt="Company Logo" />
                <img src="/images/home/Logo-5.png" alt="Company Logo" />
                <p>
                  <a href="">Meet all customers</a>
                  <img src="/images/home/Right.png" alt="Right Arrow" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing */}
      <section className="marketing" id="marketing">
        <div className="container">
          <div className="marketing-content">
            <div className="text">
              <h2>Caring is the new marketing</h2>
              <p>
                The Nexcent blog is the best place to read about the latest
                membership insights,
                <br />
                trends and more. See who&#39;s joining the community, read about
                how our community
                <br />
                are increasing their membership income and lots more.
              </p>
            </div>
            <MarketingCards />
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="demo" id="demo">
        <div className="container">
          <div className="demo-content">
            <h2>
              Pellentesque suscipit
              <br />
              fringilla libero eu.
            </h2>
            <button>
              Get a demo{" "}
              <img src="/images/home/Right-white.png" alt="Right Arrow" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
