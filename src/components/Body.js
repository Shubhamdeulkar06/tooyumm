import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.4909301&lng=73.8278496&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter data
            const data = filterData(searchText, allRestaurants);
            //update the state -restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="card-container">
        {filteredRestaurants.map((restaurant) => {
          return filteredRestaurants.length === 0 ? (
            <h1>No Match Fould!</h1>
          ) : (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
