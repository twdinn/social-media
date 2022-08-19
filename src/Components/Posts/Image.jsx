import React from "react";

const Image = (setImage) => {
  const handleImage = (e) => {
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <label for="images">Add Image</label>
      <input id="images" type="file" accept="image/*" onChange={handleImage} />
    </div>
  );
};

export default Image;
