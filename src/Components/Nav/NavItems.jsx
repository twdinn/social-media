import React from "react";
import "./NavItems.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <nav className="nav_items">
      <li
        className="nav_item"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <HomeIcon />
      </li>

      <Link to="/">
        <li className="nav_item">Sign Out</li>
      </Link>
    </nav>
  );
};

export default NavItems;
