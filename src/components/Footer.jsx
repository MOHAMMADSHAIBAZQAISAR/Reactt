import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
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
      </div>
      <p>&copy; 2024 Food Fire .All rights reserved.</p>
    </footer>
  );
};

export default Footer;
