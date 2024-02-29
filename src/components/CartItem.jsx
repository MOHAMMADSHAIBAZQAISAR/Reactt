import React from "react";
import { IMG_URL } from "./Constent";

const CartItem = ({ name, price, imageId }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <div className="flex p-4">
        <div className="flex-grow pr-4">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <p className="text-sm mb-2">₹{price / 100}</p>
        </div>
        <div>
          <img
            className="w-24 h-24 object-cover"
            src={IMG_URL + imageId}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
