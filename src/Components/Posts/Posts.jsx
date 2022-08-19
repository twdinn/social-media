import React, { useState } from "react";
import "./Posts.css";
import Image from "./Image";

const Posts = ({ setPost, setValue, value }) => {
  const [image, setImage] = useState("");
  let post = "";

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    setPost(post);
    console.log(post);
  };

  const handleImage = (e) => {
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
  };

  // const ClearField = () => {
  //   setPost("");
  // };

  return (
    <form className="post" onSubmit={handleSubmitBtn}>
      <div className="post_input">
        <input
          type="text"
          placeholder="Post a Joke"
          onChange={(e) => {
            post = e.target.value;
            // setValue(e.currentTarget.value);
          }}
          // value={value}
        />
        <label for="images">Add Image</label>
        <input
          id="images"
          type="file"
          accept="image/*"
          hidden
          onChange={handleImage}
        />
        <img src={image} alt="" />
      </div>

      <div className="post_btn">
        <button>Post</button>
      </div>
    </form>
  );
};

export default Posts;
