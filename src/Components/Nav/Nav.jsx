import React from "react";
import "./Nav.css";
import HomeIcon from "@mui/icons-material/Home";
import Posts from "../Posts/Posts";

const Nav = (props) => {
  const setPost = props.setPost;
  return (
    <div className="nav">
      <Posts setPost={setPost} />

      <h1 className="nav_greeting">Welcome {props.name}</h1>
      {/* <h2>{post}</h2> */}

      <nav>
        <li className="nav_item">
          <HomeIcon />
        </li>
        <li className="nav_item">Feed</li>
      </nav>
    </div>
  );
};

export default Nav;
