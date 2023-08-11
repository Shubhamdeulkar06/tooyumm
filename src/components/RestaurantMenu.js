import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const param = useParams();
  const { resId } = param;

  const [restaurant, setRestaurant] = useState(null);
  //   const [menuItems, setmenuItems] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.4909301&lng=73.8278496&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

  if (restaurant === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    restaurant?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card
      ?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId} </h1>
        <h2>{name}</h2>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{cuisines}</h2>
        <h2>{costForTwoMessage}</h2>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
