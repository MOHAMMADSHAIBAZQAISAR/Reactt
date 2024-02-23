import React from "react";
import { IMG_URL } from "./Constent";

const RestrauntCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // const {name, cuisines, cloudinaryImageId, avgRating} = restaurant.info; //Destructuring of prop
  return (
    <div className="flex w-[350px] flex-wrap p-2 m-2">
      <img className src={IMG_URL + cloudinaryImageId} alt="mehfil"></img>
      <h1 className="font-bold ">{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} ⭐</h4>
    </div>
  );
};

export default RestrauntCard;
