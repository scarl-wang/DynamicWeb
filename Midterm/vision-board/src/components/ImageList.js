import React from "react";
import ImageItem from "./ImageItem";

// this is only responsible for the mapping logic

const ImageList = (props) => {
  const { images } = props;

  return (
    <div className="flex flex-col justify-center items-center m-4 gap-4">
      {images.map((img) => (
        <ImageItem key={img.id} image={img} />
      ))}
    </div>
  );
};

export default ImageList;
