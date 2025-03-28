import React from "react";
import { ManageCards } from "./ManageCards";
import "./Manage.css";

const Manage = ({
  title = "Manage your entire community in a single system",
  subtitle = "Who is Nexcent suitable for?",
}) => {
  return (
    <>
      <section className="manage" id="manage">
        <div className="container">
          <div className="manage-content">
            <div className="text">
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
            <ManageCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Manage;
