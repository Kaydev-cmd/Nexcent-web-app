import React from "react";
import "./ReInventCards.css";

const ReInventCards = ({ stats = [] }) => {
  return (
    <>
      <div className="right-wrapper">
        <div className="content-wrapper">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <img src={stat.image} alt={stat.alt} />
              <div className="text">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

ReInventCards.defaultProps = {
  stats: [
    {
      image: "/images/home/Icon-10.png",
      alt: "Users",
      value: "2,245,341",
      label: "Members",
    },
    {
      image: "/images/home/Icon-11.png",
      alt: "Hands",
      value: "46,328",
      label: "Clubs",
    },
    {
      image: "/images/home/Icon-12.png",
      alt: "Hand",
      value: "828,867",
      label: "Event Bookings",
    },
    {
      image: "/images/home/Icon-13.png",
      alt: "Card",
      value: "1,926,436",
      label: "Payments",
    },
  ],
};

export default ReInventCards;
