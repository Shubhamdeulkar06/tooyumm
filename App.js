import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDO4Rq_8xvu8QGBchN8F-IwPz9E4oZEZ0ODQ&usqp=CAU"
      />
    </a>
  );
};

const Navbar = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
};

const restaurantList = [
  {
    info: {
      id: "175143",
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      locality: "Panaji Miramar",
      areaName: "Miramar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,

      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
    },
  },
  {
    info: {
      id: "74513",
      name: "Domino's Pizza",
      cloudinaryImageId: "vsdmwuvgciztfzutos8i",
      locality: "Atmaram Borkar Road",
      areaName: "Altinho",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,

      parentId: "2456",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
    },
  },
  {
    info: {
      id: "400030",
      name: "Copperleaf Panaji",
      cloudinaryImageId: "mzjvdohpoktnqrr6f8gh",
      locality: "Taleigao",
      areaName: "Panaji",
      costForTwo: "₹300 for two",
      cuisines: [
        "Chinese",
        "Goan",
        "Mughlai",
        "North Indian",
        "Seafood",
        "South Indian",
        "Salads",
        "Thalis",
      ],
      avgRating: 4.5,

      parentId: "244092",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "131962",
      name: "Ritz Classic- Panaji",
      cloudinaryImageId: "qlh41bvutbzf1ot9s5ml",
      locality: "Panjim",
      areaName: "Panjim",
      costForTwo: "₹1500 for two",
      cuisines: ["North Indian", "Chinese"],
      avgRating: 4,

      parentId: "169843",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
    },
  },
  {
    info: {
      id: "77883",
      name: "Sharda Classic",
      cloudinaryImageId: "o3mqw9wla9yhib4l3iph",
      areaName: "Panaji",
      costForTwo: "₹700 for two",
      cuisines: ["Seafood", "North Indian", "Chinese"],
      avgRating: 4.3,

      parentId: "7257",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
    },
  },
  {
    info: {
      id: "75857",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "CACULO MALL",
      areaName: "Santa Inez",
      costForTwo: "₹450 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 3.9,

      parentId: "547",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "101701",
      name: "Natural Ice Cream",
      cloudinaryImageId: "cl0kdwlfrefxuu47odr5",
      locality: "Opposite Don Bosco School",
      areaName: "Panaji",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,

      parentId: "2093",
      avgRatingString: "4.6",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "77002",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "sohymm0qyj97xwm2pmip",
      locality: "Alfran Plazza",
      areaName: "Panaji",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.4,
      veg: true,

      parentId: "2233",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "340052",
      name: "Niyaaz Porvorim",
      cloudinaryImageId: "kentw8jyc0dyk9vffumi",
      locality: "Sangolda",
      areaName: "Porvorim",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Biryani", "Chinese"],
      avgRating: 4.1,

      parentId: "149532",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "114346",
      name: "Niyaaz",
      cloudinaryImageId: "gdkjqiid4twpfwoswrgr",
      locality: "Panaji",
      areaName: "Bambolim",
      costForTwo: "₹800 for two",
      cuisines: ["Biryani", "Indian", "Mughlai", "Chinese"],
      avgRating: 4.1,

      parentId: "149527",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "266114",
      name: "Wow! Momo",
      cloudinaryImageId: "0984acc0ed7b914206dbbcb90297becc",
      locality: "Panjim",
      areaName: "Panjim",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,

      parentId: "1776",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "457471",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "5fe4444a065b60c4fe39ef975222c12b",
      locality: "Manguirish Apartment",
      areaName: "Panaji",
      costForTwo: "₹700 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4,

      parentId: "4961",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
    },
  },
  {
    info: {
      id: "77880",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Mg Road",
      areaName: "Panaji",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,

      parentId: "5588",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
    },
  },
  {
    info: {
      id: "78872",
      name: "Navtara Veg Restaurant- Panaji Market",
      cloudinaryImageId: "q7vgwq1nkujyev6acqjd",
      locality: "Panjim",
      areaName: "Panjim",
      costForTwo: "₹400 for two",
      cuisines: ["Indian", "Beverages"],
      avgRating: 3.9,

      parentId: "7250",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
    },
  },
  {
    info: {
      id: "78184",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Panaji",
      areaName: "Miramar",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4,

      parentId: "2",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "481520",
      name: "Mamagoto",
      cloudinaryImageId: "qanpqqbvi7nehja9spa0",
      areaName: "Panjim",
      costForTwo: "₹800 for two",
      cuisines: ["Asian", "Chinese", "Pan-Asian", "Thai", "Oriental"],
      avgRating: 4.4,

      parentId: "622",
      avgRatingString: "4.4",
      totalRatingsString: "500+",
    },
  },
  {
    info: {
      id: "214949",
      name: "The Tiffin Factory - Panaji",
      cloudinaryImageId: "769502dea8c9bffd3256cb99139ed978",
      locality: "Panaji",
      areaName: "Santa Inez",
      costForTwo: "₹300 for two",
      cuisines: ["Goan", "Indian", "Chinese", "Thai", "Continental"],
      avgRating: 4,

      parentId: "10246",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
    },
  },
  {
    info: {
      id: "74296",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Alto Porvorim",
      areaName: "Alto Porvorim",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.8,

      parentId: "721",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
    },
  },
  {
    info: {
      id: "363127",
      name: "Biryani By Kilo",
      cloudinaryImageId: "nvxcjipkiuieutdhaqja",
      locality: "Panjim",
      areaName: "Panjim",
      costForTwo: "₹499 for two",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4.1,

      parentId: "130",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
    },
  },
  {
    info: {
      id: "84365",
      name: "Copperleaf Porvorim",
      cloudinaryImageId: "on1ulkkj25jgxqoq2jf1",
      locality: "Penha de Franca",
      areaName: "Porvorim",
      costForTwo: "₹1200 for two",
      cuisines: ["Indian", "Chinese", "Desserts", "North Indian", "Mughlai"],
      avgRating: 4.5,
      parentId: "65196",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
    },
  },
];
const Card = ({ name, cloudinaryImageId, avgRatingString, cuisines }) => {
  // const { name, cloudinaryImageId, avgRatingString, cuisines } = resto.info;
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="image"
      />
      <div className="card-Content">
        <h2>{name}</h2>
        <h3>{avgRatingString} &#9733;</h3>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="card-container">
      <Card {...restaurantList[0].info} />
      <Card {...restaurantList[1].info} />
      <Card {...restaurantList[2].info} />
      <Card {...restaurantList[3].info} />
    </div>
  );
};
const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayot = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayot />);
