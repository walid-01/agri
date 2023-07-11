import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src="https://i.postimg.cc/Zn8QLRGc/two.png" alt="" />
        </Link>
      </div>
      <div className="nav-items">
        <a href="/#home" className="nav-item">
          <p>HOME</p>
        </a>
        <a href="/#about" className="nav-item">
          <p>ABOUT</p>
        </a>
        <a href="/#services" className="nav-item">
          <p>SERVICES</p>
        </a>
        <a href="/#portfolio" className="nav-item">
          <p>PORTFOLIO</p>
        </a>
        <a href="/#team" className="nav-item">
          <p>TEAM</p>
        </a>
        <a href="/#contact" className="nav-item">
          <p>CONTACT</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
