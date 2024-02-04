import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import FoodFireLogo from "../../Images/FoodFireLogo.png";

const Title = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="FoodFireLogo" />
  </a>
);

const Header = () => {
  const [title, setTitle] = useState("Food Fire");
  const [isChanged, setChange] = useState(false);

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
