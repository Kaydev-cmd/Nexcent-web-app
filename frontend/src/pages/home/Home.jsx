import React from "react";
import "./Home.css";
import { Hero } from "../../components/Hero/Hero";
import { MarketingCards } from "../../components/Marketing/MarketingCards";
import OurClients from "../../components/Clients/OurClients";
import Manage from "../../components/Manage/Manage";
import LearnMore from "../../components/LearnMore/LearnMore";
import ReInvent from "../../components/ReInvent/ReInvent";
import LocalBusiness from "../../components/LocalBusiness/LocalBusiness";
import Customers from "../../components/Customers/Customers";
import Marketing from "../../components/Marketing/Marketing";

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
      <Marketing />

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
