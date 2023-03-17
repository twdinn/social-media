import React from "react";

// Displays Name on the NavBar if the User Logs in
// Displays Username if the User Signs Up
const NavGreeting = ({ name, userName }) => {
  return (
    <nav className="nav_greeting">
      {name ? <h1>{name}'s Feed</h1> : <h1>{userName}'s Feed</h1>}
    </nav>
  );
};

export default NavGreeting;
