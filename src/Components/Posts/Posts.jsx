import React from "react";

const Posts = (props) => {
  let post = "";

  const handleSubmitBtn = (e) => {
    props.setPost(post);
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
