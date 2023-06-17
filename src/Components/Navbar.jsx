import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src="" alt="" />
        </Link>
      </div>
      <div className="nav-items">
        <Link className="nav-item">
          <p>Home</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
