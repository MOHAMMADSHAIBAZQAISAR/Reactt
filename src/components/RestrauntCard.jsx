import React from "react";
import { IMG_URL } from "./Constent";

const RestrauntCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // const {name, cuisines, cloudinaryImageId, avgRating} = restaurant.info; //Destructuring of prop
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} alt="mehfil"></img>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} ⭐</h4>
    </div>
  );
};

export default RestrauntCard;
