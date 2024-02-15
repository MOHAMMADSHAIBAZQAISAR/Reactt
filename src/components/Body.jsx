import React, { useTransition } from "react";
import { ReactDOM } from "react";
import RestrauntCard from "./RestrauntCard";
import restaurants from "./Constent";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allrestaurantsList, setallRestaurant] = useState([]);
  const [filteredRestaurents, setfilteredRestaurents] = useState([]);

  function filterData(searchText, restaurantsList) {
    return restaurantsList.filter((restaurant) => {
      return restaurant.info.name.includes(searchText);
    });
  }

  useEffect(() => {
    //console.log("Hum hai useEffectt!!");
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const info = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await info.json();
    setallRestaurant(
      json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredRestaurents(
      json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return allrestaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <input
        type="text"
        placeholder="searchBox"
        className="search-input"
        value={searchText}
        onChange={(e) => {
          //call the filter fun
          setSearchText(e.target.value);
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          console.log(searchText);
          setfilteredRestaurents(filterData(searchText, allrestaurantsList));
        }}
      >
        Search
      </button>
      <div className="card-list">
        {/* You have to write logic for NO restraunt fount here */}
        {filteredRestaurents.length ? (
          filteredRestaurents.map((restaruent) => {
            return (
              <Link
                to={"/restaurant/" + restaruent.info.id}
                key={restaruent.info.id}
              >
                <RestrauntCard {...restaruent.info} />
              </Link>
            );
          })
        ) : (
          <h1>No restaurent found</h1>
        )}
        {/* <RestrauntCard {...restaurants[0].info}/>
        <RestrauntCard {...restaurants[1].info}/>
        <RestrauntCard {...restaurants[2].info}/>
        <RestrauntCard {...restaurants[3].info}/> */}
      </div>
    </>
  );
};

export default Body;
