import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex m-2">
        <h1 className=" m-4 text-2xl font-bold mb-4">Cart Items</h1>
        <button
          onClick={() => handleClick()}
          className=" m-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length ? (
        <div className="flex flex-wrap -mx-2">
          {cartItems.map((item, index) => (
            <div key={index} className="w-1/2 px-2 mb-4">
              <CartItem {...item} />
            </div>
          ))}
        </div>
      ) : (
        <h1>No items in your cart!! Add item into the Cart!</h1>
      )}
    </div>
  );
};

export default Cart;
