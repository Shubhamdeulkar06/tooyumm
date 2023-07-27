import React from "react";
import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRatingString,
  cuisines,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
      <div className="card-Content">
        <h2>{name}</h2>
        <h3>&#9733; {avgRatingString} </h3>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
