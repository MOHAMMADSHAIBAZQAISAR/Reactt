import React, { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_URL } from "./Constent";

const RestaurantDetails = () => {
  const [restraunt, setRestraunt] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[0]?.card?.card?.info?.name);
    //to render this on our page will be using useState.
    setRestraunt(json?.data?.cards[0]?.card?.card?.info);
  }

  return !restraunt ? (
    <Shimmer />
  ) : (
    <>
      <img src={IMG_URL + restraunt.cloudinaryImageId}></img>
      <h1>Restaurant id : {restraunt.id}</h1>
      <h2> Restaurant name: {restraunt.name}</h2>
      <h3>City: {restraunt.city}</h3>
      <div>
        <h1>Cuisines</h1>
        <ul>
          {Object.values(restraunt?.cuisines).map((item) => (
            <li key={item.id}> {item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantDetails;