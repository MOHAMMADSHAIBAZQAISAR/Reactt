import React, { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_URL } from "./Constent";
import { RES_MENUE } from "./Constent";
import useResDetails from "../utils/useResDetails";
import useOnline from "../utils/useOnline";
import Menu from "./Menu";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restraunt = useResDetails(id);
  //console.log(restraunt);

  const offline = useOnline();
  if (!offline) {
    return <h1>🔴 You are offline!!</h1>;
  }

  return !restraunt ? (
    <Shimmer />
  ) : (
    <>
      <div className="max-xl: mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-full">
        <h1 className="text-xl font-bold mb-2">
          {" "}
          Restaurant name: {restraunt.name}
        </h1>
        <img
          className="w-full h-48 object-cover"
          src={IMG_URL + restraunt.cloudinaryImageId}
        ></img>
        <p className="text-gray-600 mb-2">Restaurant id : {restraunt.id}</p>
        <p className="text-gray-600 mb-2">City: {restraunt.city}</p>
        <div>
          <h1 className="text-lg font-bold text-gray-700 mb-2">Cuisines</h1>
          <ul className="text-gray-600">
            {Object.values(restraunt?.cuisines).map((item) => (
              <li key={item.id}> {item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Menu id={id} />
    </>
  );
};

export default RestaurantDetails;
