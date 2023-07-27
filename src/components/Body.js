import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
const Body = () => {
  return (
    <div className="card-container">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
      })}
    </div>
  );
};

export default Body;
