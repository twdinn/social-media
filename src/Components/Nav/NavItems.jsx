import React from "react";
import "./NavItems.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link, NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <nav className="nav_items">
      <NavLink to="/nav">
        <li className="nav_item">
          <HomeIcon />
        </li>
      </NavLink>

      <Link to="/">
        <li className="nav_item">Sign Out</li>
      </Link>
    </nav>
  );
};

export default NavItems;
