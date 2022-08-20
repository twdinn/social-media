import React from "react";
import "./Nav.css";
import Posts from "../Posts/Posts";
import NavGreeting from "./NavGreeting";
import NavItems from "./NavItems";
// import Image from "../Posts/Image";

// UserName or Name are Displayed on Nav Using NavGreeting
const Nav = ({ userName, name, setPost, setImage }) => {
  return (
    <div className="nav">
      <NavGreeting name={name} userName={userName} />
      <Posts setPost={setPost} />
      {/* <Image setImage={setImage} /> */}
      <NavItems />
    </div>
  );
};

export default Nav;
