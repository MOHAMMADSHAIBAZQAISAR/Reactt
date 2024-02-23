import React, { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_URL } from "./Constent";
import { RES_MENUE } from "./Constent";
import useResDetails from "../utils/useResDetails";
import useOnline from "../utils/useOnline";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restraunt = useResDetails(id);
  console.log(restraunt);

  const offline = useOnline();
  if (!offline) {
    return <h1>🔴 You are offline!!</h1>;
  }

  return !restraunt ? (
    <Shimmer />
  ) : (
    <>
      <div className="restaurant-info">
        <h1> Restaurant name: {restraunt.name}</h1>
        <img src={IMG_URL + restraunt.cloudinaryImageId}></img>
        <h3>Restaurant id : {restraunt.id}</h3>
        <h3>City: {restraunt.city}</h3>
        <div>
          <h1>Cuisines</h1>
          <ul>
            {Object.values(restraunt?.cuisines).map((item) => (
              <li key={item.id}> {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
