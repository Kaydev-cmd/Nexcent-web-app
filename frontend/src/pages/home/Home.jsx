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
import Demo from "../../components/Demo/Demo";

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
      <Demo />
    </>
  );
};

export default Home;
