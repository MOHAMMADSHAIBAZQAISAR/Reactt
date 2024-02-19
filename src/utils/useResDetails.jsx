import { useState, useEffect } from "react";
import { RES_MENUE } from "../components/Constent";

const useResDetails = (resId) => {
  //requrie a state variable.
  const [restaruent, setRestraunt] = useState();

  //for that make an API call
  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(
      RES_MENUE + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    //to render this on our page will be using useState.
    setRestraunt(json?.data?.cards[0]?.card?.card?.info);
  }

  //we return the fetched res details.
  return restaruent;
};

export default useResDetails;
