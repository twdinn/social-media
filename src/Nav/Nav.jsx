import React, { useState } from "react";
import "./Nav.css";
import HomeIcon from "@mui/icons-material/Home";
import Post from "../Components/Posts/Posts";

const Nav = (props) => {
  const [post, setPost] = useState("");

  props.setJoke(post);

  return (
    <div className="nav">
      <Post setPost={setPost} />
      <h1 className="nav_greeting">Welcome {props.name}</h1>

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
