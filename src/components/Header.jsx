import React, { useContext } from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import FoodFireLogo from "../../Images/FoodFireLogo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/">
    <img
      className="h-16 w-auto transition duration-300 transform hover:scale-110"
      src={FoodFireLogo}
      alt="FoodFireLogo"
    />
  </a>
);

const Header = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("Food Fire");
  const [isChanged, setChange] = useState(false);

  return (
    <div className="flex items-center justify-between py-4 px-8 bg-white">
      <Title />

      <div className="">
        <ul className="flex space-x-4">
          <Link className="text-gray-500 hover:text-orange-600" to="/">
            Home
          </Link>
          <Link className="text-gray-500 hover:text-orange-600" to="/About">
            About
          </Link>
          <Link className="text-gray-500 hover:text-orange-600" to="/Contact">
            Contact
          </Link>

          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
