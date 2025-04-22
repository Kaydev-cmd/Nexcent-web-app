import React from "react";
import { MarketingCards } from "./MarketingCards";
import "./Marketing.css";

const Marketing = () => {
  return (
    <>
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
    </>
  );
};

export default Marketing;
