import React from "react";
import { Link } from "react-router-dom";
// Displays Name on the NavBar if the User Logs in
// Displays Username if the User Signs Up
const NavGreeting = ({ name, userName }) => {
  return (
    <nav className="nav_greeting">
      <Link to="/profile">
        {name ? <h1>{name}'s Feed</h1> : <h1>{userName}'s Profile</h1>}
      </Link>
    </nav>
  );
};

export default NavGreeting;
