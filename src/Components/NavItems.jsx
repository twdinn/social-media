import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <nav className="nav_items">
      {/* Scrolls to Top of Page When HomeIcon is Clicked */}
      <li
        className="nav_item"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <HomeIcon />
      </li>

      {/* Goes Back to Login Page */}
      <Link to="/">
        <li className="nav_item sign-out">Sign Out</li>
      </Link>
    </nav>
  );
};

export default NavItems;
