import React, { useContext } from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <footer className="flex flex-col items-center justify-center bg-black text-white py-8">
      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/mohammad-shaibaz-qaisar-597103219/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href="https://twitter.com/QaisarShaibaz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaTwitter className="text-xl" />
        </a>
        <a
          href="https://www.instagram.com/mds_shaibaz/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaInstagram className="text-xl" />
        </a>
        {/* <span className="hover:text-blue-500">{user.name}</span> */}
      </div>
      <p className="mt-4">&copy; 2024 Food Fire .All rights reserved.</p>
    </footer>
  );
};

export default Footer;
