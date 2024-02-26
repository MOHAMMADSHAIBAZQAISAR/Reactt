import React from "react";
import useItems from "../utils/useItems";
import { IMG_URL } from "./Constent";

const Menu = ({ id }) => {
  const items = useItems(id);
  console.log(items);
  return (
    <>
      {items &&
        items.map((item, index) => (
          <div
            key={index}
            className="flex items-center py-4 px-36 border rounded shadow-lg"
          >
            <div className="flex-grow pr-4">
              <h2 className="text-xl font-bold mb-2">
                {item?.card?.info?.name}
              </h2>
              <p className="text-lg mb-2">₹{item?.card?.info?.price / 100}</p>
              <p className="text-gray-600">{item?.card?.info?.description}</p>
            </div>
            <div className="flex-shrink-0">
              <img
                className="w-24 h-24 object-cover"
                src={IMG_URL + item?.card?.info?.imageId}
                alt={item?.info?.name}
              />
              <button className="block w-full m-2 py-2 px-4 bg-gray-500 text-white rounded hover:bg-orange-500 focus:outline-none transition duration-300">
                Add
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Menu;
