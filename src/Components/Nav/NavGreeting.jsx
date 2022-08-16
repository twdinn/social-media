import React from "react";
import "./NavGreeting.css";

const NavGreeting = ({ name }) => {
  return (
    <div className="nav_greeting">
      <h1>Welcome {name}</h1>
    </div>
  );
};

export default NavGreeting;
