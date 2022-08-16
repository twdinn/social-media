import React from "react";
import "./NavGreeting.css";

const NavGreeting = ({ name, userName }) => {
  return (
    <div className="nav_greeting">
      {name ? <h1>{name}'s Feed</h1> : <h1>{userName}'s Feed</h1>}
    </div>
  );
};

export default NavGreeting;
