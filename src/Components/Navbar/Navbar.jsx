import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [showHide, checkMenu] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>

        <div className="hamburger-icon" onClick={() => checkMenu(!showHide)}>
          <img
            src={showHide ? "/close-menu.png" : "/open-menu.png"}
            alt="open-menu"
          />
        </div>
        <ul className={showHide ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink to="/" end onClick={() => checkMenu(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="My Blogs">My Blogs</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
