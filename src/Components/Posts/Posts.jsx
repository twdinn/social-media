import React from "react";
import "./Posts.css";
// import Image from "./Image";

const Posts = ({ setPost }) => {
  let post = "";
  // const [value, setValue] = useState(post);

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    setPost(post);
  };

  // const handlePost = () => {
  //   setValue("");
  // };

  return (
    <form className="post" onSubmit={handleSubmitBtn}>
      <div className="post_input">
        <input
          type="text"
          placeholder="Post a Joke"
          onChange={(e) => (post = e.target.value)}
        />
        {/* <Image setImage={setImage} /> */}
      </div>

      <div className="post_btn">
        <button type="submit">Post</button>
      </div>
    </form>
  );
};

export default Posts;
