import React from "react";

import "./Posts.css";

const Posts = ({ setPost }) => {
  let post = "";

  const handleSubmitBtn = (e) => {
    setPost(post);
    e.preventDefault();
  };
  return (
    <div className="post">
      <form>
        <input
          type="text"
          placeholder="Post a Joke"
          onChange={(e) => (post = e.target.value)}
        />
        <button onClick={handleSubmitBtn}>Post</button>
      </form>
    </div>
  );
};

export default Posts;
