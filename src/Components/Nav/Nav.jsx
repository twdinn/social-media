import React from "react";
import "./Nav.css";
import Posts from "../Posts/Posts";
import NavGreeting from "./NavGreeting";
import NavItems from "./NavItems";

const Nav = ({ userName, name, setPost, post, setImage }) => {
  return (
    <div className="nav">
      <NavGreeting name={name} userName={userName} />
      <Posts setPost={setPost} setImage={setImage} />
      <NavItems />
    </div>
  );
};

export default Nav;
