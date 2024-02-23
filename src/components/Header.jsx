import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import FoodFireLogo from "../../Images/FoodFireLogo.png";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="flex h-28 p-2   wrap"
      src={FoodFireLogo}
      alt="FoodFireLogo"
    />
  </a>
);

const Header = () => {
  const [title, setTitle] = useState("Food Fire");
  const [isChanged, setChange] = useState(false);

  return (
    <div className="flex pl-8 justify-between">
      <Title />

      <div className="flex py-10">
        <ul>
          <Link className="px-2" to="/">
            Home
          </Link>
          <Link className="px-2" to="/About">
            About
          </Link>
          <Link className="px-2" to="/Contact">
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
