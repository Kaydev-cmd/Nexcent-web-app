import React from "react";
import "./Home.css";
import { Hero } from "../../components/Hero/Hero";
import { MarketingCards } from "../../components/MarketingCards";
import OurClients from "../../components/Clients/OurClients";
import Manage from "../../components/Manage/Manage";
import LearnMore from "../../components/LearnMore/LearnMore";
import ReInvent from "../../components/ReInvent/ReInvent";
import LocalBusiness from "../../components/LocalBusiness/LocalBusiness";
import Customers from "../../components/Customers/Customers";

export const Home = () => {
  return (
    <>
      <Hero />
      <OurClients />
      <Manage />
      <LearnMore />
      <ReInvent />
      <LocalBusiness />
      <Customers />

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
