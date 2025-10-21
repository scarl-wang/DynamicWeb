import React from "react";
import Favorite from "./FavButton";
import FavButton from "./FavButton";

const ImageItem = (props) => {
  const { image, toggleFav, isInFavs } = props;
  const showFavButton = toggleFav && isInFavs;

  // individual image hearts with heart button on top right

  return (
    <div className="relative">
      {/* image */}
      <img
        className="w-full h-80 object-cover rounded-lg"
        src={image.urls.regular}
        alt={image.alt_description}
      />
      {/* heart button (only show for search page) */}
      {showFavButton && (
        <div className="absolute top-2 right-2 ">
          <FavButton image={image} toggleFav={toggleFav} isInFavs={isInFavs} />
        </div>
      )}
    </div>
  );
};

export default ImageItem;
