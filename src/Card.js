import React from "react";

export default function Card(props) {
  const { experience } = props;
  const isFavorite = false;

  return (
    <div className="Card">
      <img
        className="Card-hero"
        alt="Product hero"
        src={experience.productImage}
      />
      <button className={"Card-favorite " + (isFavorite ? "Favorite" : "")}>
        <svg>
          <use xlinkHref="#favorite" />
        </svg>
      </button>
      <h2 className="Card-title">{experience.title}</h2>
      <div className="Card-price">From ${experience.prices[0].retailPrice}</div>
      <div className="Card-rating">
        <em className="active">★</em>
        <em className="active">★</em>
        <em className="active">★</em>
        <em className="active">★</em>
        <em className="">★</em>
        <span className="Card-ratings">({experience.avgRating})</span>
      </div>
    </div>
  );
}
