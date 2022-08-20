import React from "react";
import "./NavGreeting.css";

// Displays Name on the NavBar if the User Logs in
// Displays Username if the User Signs Up
const NavGreeting = ({ name, userName }) => {
  return (
    <div className="nav_greeting">
      {name ? <h1>{name}'s Feed</h1> : <h1>{userName}'s Feed</h1>}
    </div>
  );
};

export default NavGreeting;
