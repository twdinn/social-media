import React from "react";
import "./Posts.css";

const Posts = ({ setPost }) => {
  let post = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setPost(post);
  };

  return (
    <form className="post" onSubmit={handleSubmit}>
      <div className="post_input">
        <input
          type="text"
          placeholder="Post a Joke"
          onChange={(e) => {
            post = e.target.value;
          }}
        />
      </div>

      <div className="post_btn">
        <button type="submit">Post</button>
      </div>
    </form>
  );
};

export default Posts;
