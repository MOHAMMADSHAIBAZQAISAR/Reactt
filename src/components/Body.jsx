import React, { useTransition } from "react";
import { ReactDOM } from "react";
import RestrauntCard from "./RestrauntCard";
import restaurants, { RESTAURANT_DETAILS } from "./Constent";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import { RES_DETAILS } from "./Constent";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allrestaurantsList, setallRestaurant] = useState([]);
  const [filteredRestaurents, setfilteredRestaurents] = useState([]);

  const { user, setUser } = useContext(UserContext);

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
      <div className="flex justify-center items-center">
        <div className="flex max-w-lg w-full mx-4">
          <input
            type="text"
            placeholder="search for restaurants"
            className="search-input px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-300 hover:bg-gray-100 w-full"
            value={searchText}
            onChange={(e) => {
              //call the filter fun
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 rounded-r-md bg-orange-400 text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
            onClick={() => {
              console.log(searchText);
              setfilteredRestaurents(
                filterData(searchText, allrestaurantsList)
              );
            }}
          >
            Search
          </button>
          {/* <input
            value={user.name}
            onChange={(e) => {
              setUser({
                name: e.target.value,
                email: "newMail@gmail.com",
              });
            }}
          ></input> */}
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {/* You have to write logic for NO restraunt fount here */}
        {filteredRestaurents.length ? (
          filteredRestaurents.map((restaruent) => {
            return (
              <Link
                className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4 transition duration-300 transform hover:scale-105"
                to={"/restaurant/" + restaruent.info.id}
                key={restaruent.info.id}
              >
                <RestrauntCard {...restaruent.info} />
              </Link>
            );
          })
        ) : (
          <h1 className="text-center w-full">No restaurent found</h1>
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
