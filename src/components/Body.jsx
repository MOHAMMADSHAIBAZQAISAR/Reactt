import React, { useTransition } from "react";
import { ReactDOM } from "react";
import RestrauntCard from "./RestrauntCard";
import restaurants from "./Constent";
import { useState, useEffect } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [restaurantsList, setRestaurant] = useState(restaurants);

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
    setRestaurant(
      json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return (
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
          setRestaurant(filterData(searchText, restaurantsList));
        }}
      >
        Search
      </button>
      <div className="card-list">
        {restaurantsList.map((restaruent) => {
          return (
            <RestrauntCard {...restaruent.info} key={restaruent.info.id} />
          );
        })}
        {/* <RestrauntCard {...restaurants[0].info}/>
        <RestrauntCard {...restaurants[1].info}/>
        <RestrauntCard {...restaurants[2].info}/>
        <RestrauntCard {...restaurants[3].info}/> */}
      </div>
    </>
  );
};

export default Body;
