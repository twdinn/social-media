import React from "react";

const Image = (setImage) => {
  return (
    <div>
      <label for="images">Add Image</label>
      <input
        id="images"
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => setImage(e.target.files[0])}
      />
    </div>
  );
};

export default Image;
