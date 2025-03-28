import React from "react";
import ReInventCards from "./ReInventCards";
import "./ReInvent.css";

const ReInvent = () => {
  return (
    <>
      <section className="reinvent" id="reinvent">
        <div className="container">
          <div className="content">
            <div className="text">
              <h2>
                Helping a local
                <br />
                <span>business reinvent itself</span>
              </h2>
              <p>We reached here with our hard work and dedication</p>
            </div>
            <ReInventCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReInvent;
