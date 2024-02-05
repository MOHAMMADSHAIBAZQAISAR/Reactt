// import React, { useTransition } from "react";
// import { ReactDOM } from "react";
// import RestrauntCard from "./RestrauntCard";
// import restaurants from "./Constent";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [searchText, setSearchText] = useState();
//   const [allrestaurantsList, setallRestaurant] = useState([]);
//   const [filteredRestaurents, setfilteredRestaurents] = useState([]);

//   function filterData(searchText, restaurantsList) {
//     return restaurantsList.filter((restaurant) => {
//       return restaurant.info.name.includes(searchText);
//     });
//   }

//   useEffect(() => {
//     //console.log("Hum hai useEffectt!!");
//     getRestaurents();
//   }, []);

//   async function getRestaurents() {
//     const info = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await info.json();
//     setallRestaurant(
//       json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
//     );
//     setfilteredRestaurents(
//       json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
//     );
//   }

//   return allrestaurantsList.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <>
//       <input
//         type="text"
//         placeholder="searchBox"
//         className="search-input"
//         value={searchText}
//         onChange={(e) => {
//           //call the filter fun
//           setSearchText(e.target.value);
//         }}
//       />
//       <button
//         className="search-btn"
//         onClick={() => {
//           console.log(searchText);
//           setfilteredRestaurents(filterData(searchText, allrestaurantsList));
//         }}
//       >
//         Search
//       </button>
//       <div className="card-list">
//         {/* You have to write logic for NO restraunt fount here */}
//         {filteredRestaurents.length ? (
//           filteredRestaurents.map((restaruent) => {
//             return (
//               <RestrauntCard {...restaruent.info} key={restaruent.info.id} />
//             );
//           })
//         ) : (
//           <h1>No restaurent found</h1>
//         )}
//         {/* <RestrauntCard {...restaurants[0].info}/>
//         <RestrauntCard {...restaurants[1].info}/>
//         <RestrauntCard {...restaurants[2].info}/>
//         <RestrauntCard {...restaurants[3].info}/> */}
//       </div>
//     </>
//   );
// };

// export default Body;

//Our soln, practice but didnt workout:
// import React from 'react'
// import { useState ,useEffect} from 'react';
//  import {data} from './config';
//  import Restro from './Restro';

//  import Shimmer from './Shimmer';

// function Body(){

//   const [isSearch,setIsSearch]=useState(false);
//    const [Value,setValue]=useState("");
//   //  const [Obj,setObj]=useState([]);
//    const [filObj,setFilObj]=useState([]);

//    function setChange (val,obj){

//      const tempArray = obj.filter((temp)=>temp.title.includes(val));

//         return tempArray;
//    }

//   useEffect(async()=>{

//     console.log("UseEffect");
//     const data2 = await(await fetch("https://jsonplaceholder.typicode.com/photos")).json();
//     console.log(data2);
//     // setObj(data2);
//     setFilObj(data2);
//   },[isSearch])

//   console.log("Render")

//     return  filObj?.length ===0 ? (
//       <>
//       <Shimmer/>
//       </>
//     ) :  (
//         <>
//      <div className='search-container'>
//      <input type='text' placeholder='search' value={Value} onChange={(e)=>{

//       setValue(e.target.value);

//      }}></input>
//      <button  onClick={()=>{

//         setIsSearch(!isSearch);
//          const data2=setChange(Value,filObj);
//          console.log(data2);
//          setFilObj(data2);
//      }}

//      >Search</button>
//       </div>

// {filObj.length==0 ? <h1>what you searched is not found Rakesh Kurma !!</h1> :
//         <div className='Restro'>
//           {
//             filObj.map(res => {
//                 return <Restro Item={res} />
//             })
//         }
//         </div>
//         }

//         </>

//     );

// }
// export default Body;

// import React from 'react';

//    const Restro = (props)=>{
//     return(
// <>
//   <div className="card">
//  <img src={props.Item.url}></img>

//  <h2>{props.Item.title}</h2>
//  <p>{props.Item.thumbnailUrl}</p>

//   </div>

// </>

//     );

// }

// export default Restro;

//Chat gpt soln, 1 state var but 1 const var.
// import React, { useState, useEffect } from "react";
// import RestrauntCard from "./RestrauntCard";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [searchText, setSearchText] = useState("");
//   const [restaurantsList, setRestaurantsList] = useState([]);

//   useEffect(() => {
//     getRestaurants();
//   }, []);

//   async function getRestaurants() {
//     const info = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await info.json();
//     const fetchedRestaurants =
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants || [];
//     setRestaurantsList(fetchedRestaurants);
//   }

//   const filteredRestaurants = restaurantsList.filter((restaurant) =>
//     restaurant.info.name.includes(searchText)
//   );

//   return restaurantsList.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <>
//       <input
//         type="text"
//         placeholder="searchBox"
//         className="search-input"
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//       />
//       <button className="search-btn" onClick={() => console.log(searchText)}>
//         Search
//       </button>
//       <div className="card-list">
//         {filteredRestaurants.length ? (
//           filteredRestaurants.map((restaurant) => (
//             <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
//           ))
//         ) : (
//           <h1>No restaurant found</h1>
//         )}
//       </div>
//     </>
//   );
// };

// export default Body;
