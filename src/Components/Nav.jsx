import React from "react";
import Posts from "./Posts";
import NavGreeting from "./NavGreeting";
import NavItems from "./NavItems";

// UserName or Name are Displayed on Nav Using NavGreeting
const Nav = ({ userName, name, setPost, post }) => {
  return (
    <div className="nav">
      <NavGreeting name={name} userName={userName} />
      <Posts setPost={setPost} />
      <NavItems />
    </div>
  );
};

export default Nav;
