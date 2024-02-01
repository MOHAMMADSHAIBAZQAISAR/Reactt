import React from "react";
import RestrauntCard from "./RestrauntCard";
import restaurants from "./Constent";

const Body = () => {
  return (
    <>
      <div className="card-list">
        {restaurants.map((restaruent) => {
          return <RestrauntCard {...restaruent.info} />;
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
