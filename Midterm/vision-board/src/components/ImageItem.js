import React from "react";

const ImageItem = (props) => {
  const { image } = props;
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
      <p>{image.alt_description}</p>
    </div>
  );
};

export default ImageItem;
