// import React from "react";
import "./ManageCards.css";

const cardData = [
  {
    id: 1,
    image: "/images/home/Icon7.png",
    alt: "Users",
    title: "Membership Organization",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    id: 2,
    image: "/images/home/Icon-8.png",
    alt: "Building",
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    id: 3,
    image: "/images/home/Icon-9.png",
    alt: "Hands",
    title: "Clubs and Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
];

// Reusable Card Component
const Card = ({ image, alt, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={alt} />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Main Component
export const ManageCards = () => {
  return (
    <>
      <div className="manage-content-cards">
        {cardData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            alt={card.alt}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};
