import React from "react";

const ImageItem = (props) => {
  const { image } = props;
  return (
    <div>
      <img
        className="w-64 h-64 object-cover rounded-lg"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageItem;
