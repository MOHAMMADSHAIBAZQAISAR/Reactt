import React from "react";
import { IMG_URL } from "./Constent";

const RestrauntCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // const {name, cuisines, cloudinaryImageId, avgRating} = restaurant.info; //Destructuring of prop
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={IMG_URL + cloudinaryImageId}
        alt="mehfil"
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">{cuisines.join(", ")}</p>
        <p className="text-gray-600 text-base">{avgRating} ⭐</p>
      </div>
      {/* <h1 className="font-bold text-xl mb-2">{name}</h1>
      <p className="text-gray-700 text-base mb-2">{cuisines.join(",")}</p>
      <p className="text-gray-600 text-base">{avgRating} ⭐</p> */}
    </div>
  );
};

export default RestrauntCard;
