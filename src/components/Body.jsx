import React, { useTransition } from "react";
import { ReactDOM } from "react";
import RestrauntCard from "./RestrauntCard";
import restaurants, { RESTAURANT_DETAILS } from "./Constent";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import { RES_DETAILS } from "./Constent";

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allrestaurantsList, setallRestaurant] = useState([]);
  const [filteredRestaurents, setfilteredRestaurents] = useState([]);

  useEffect(() => {
    //console.log("Hum hai useEffectt!!");
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const info = await fetch(RES_DETAILS);
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
      <div className="search-container">
        <input
          type="text"
          placeholder="search for restaurants"
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
      </div>

      <div className="card-list">
        {/* You have to write logic for NO restraunt fount here */}
        {filteredRestaurents.length ? (
          filteredRestaurents.map((restaruent) => {
            return (
              <Link
                className="link"
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
