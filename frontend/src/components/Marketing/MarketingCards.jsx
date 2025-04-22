import React from "react";
import "./MarketingCards.css";

const marketingCardsData = [
  {
    id: 1,
    title: `Creating Streamlined\nSafeguarding Processes with\nOneRen`,
    link: "#",
  },
  {
    id: 2,
    title: `What are your safeguarding\responsiblities and how can \nyou manage them?`,
    link: "#",
  },
  {
    id: 3,
    title: `Revamping the Membership\nModel with Triathlon\nAustralia`,
    link: "#",
  },
];

const MarketingCard = ({ title, link }) => {
  const formattedTitle = title.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="marketing-content-card">
      <div className="card-text">
        <p>{formattedTitle}</p>
      </div>
      <div className="card-link">
        <p>
          <a href={link}>
            Read More
            <img src="/images/home/Right.png" alt="Right Arrow Icon" />
          </a>
        </p>
      </div>
    </div>
  );
};

export const MarketingCards = () => {
  return (
    <div className="marketing-content-cards">
      {marketingCardsData.map((card) => (
        <MarketingCard key={card.id} title={card.title} link={card.link} />
      ))}
    </div>
  );
};
