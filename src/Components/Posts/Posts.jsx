import React from "react";

import "./Posts.css";

const Posts = ({ setPost }) => {
  let post = "";

  const handleSubmitBtn = (e) => {
    setPost(post);
    e.preventDefault();
  };
  return (
    <form className="post">
      <div className="post_input">
        <input
          type="text"
          placeholder="Post a Joke"
          onChange={(e) => (post = e.target.value)}
        />
      </div>

      <div className="post_btn">
        <button onClick={handleSubmitBtn}>Post</button>
      </div>
    </form>
  );
};

export default Posts;
