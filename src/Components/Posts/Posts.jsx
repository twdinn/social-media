import React from "react";
import "./Posts.css";

const Post = (props) => {
  // const handlePostBtn = () => {
  //   push;
  // };

  return (
    <div className="post">
      <form>
        <input
          type="text"
          placeholder="Post a Joke"
          onChange={(e) => props.setPost(e.target.value)}
        />
        <button>Post</button>
      </form>
    </div>
  );
};

export default Post;
