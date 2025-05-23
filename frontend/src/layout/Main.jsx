// import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Main;
