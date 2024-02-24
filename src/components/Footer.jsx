import React, { useContext } from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <footer className="footer">
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/mohammad-shaibaz-qaisar-597103219/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/QaisarShaibaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/mds_shaibaz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <span>{user.name}</span>
      </div>
      <p>&copy; 2024 Food Fire .All rights reserved.</p>
    </footer>
  );
};

export default Footer;
