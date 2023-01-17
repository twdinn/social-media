import React, { useState } from "react";
import "./Posts.css";

const Posts = ({ setPost }) => {
  // State to keep track of the post input value
  const [post, setPostValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the setPost function passed in as a prop to add the post to the feed
    setPost(post);
    // Clear the post input value
    setPostValue("");
  };

  return (
    <form className="post" onSubmit={handleSubmit}>
      <div className="post_input">
        <input
          type="text"
          placeholder="Post a Joke"
          value={post}
          onChange={(e) => {
            setPostValue(e.target.value);
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
