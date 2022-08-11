import React from "react";
import "./Posts.css";

const Post = () => {
  return (
    <div className="post">
      <form>
        <input type="text" placeholder="Post a Joke" />
      </form>
    </div>
  );
};

export default Post;
