import React, { useContext } from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import FoodFireLogo from "../../Images/FoodFireLogo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="FoodFireLogo" />
  </a>
);

const Header = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("Food Fire");
  const [isChanged, setChange] = useState(false);

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/About">
            About
          </Link>
          <Link className="link" to="/Contact">
            Contact
          </Link>

          <span>{user.name}</span>

          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
