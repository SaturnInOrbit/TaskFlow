import React from "react";
import "../styles/Header.css";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header-container">
      <img src={Logo} alt="TaskFlow Logo" className="logo-icon" />
      <h1 className="brand-name">
        <span className="text-white">Task</span>
        <span className="text-brown">Flow</span>
      </h1>
    </header>
  );
};

export default Header;