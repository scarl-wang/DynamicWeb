import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// creating a favorite button that tracks user's liked photos

const FavButton = ({ image, toggleFav, isInFavs }) => {
  // these functions are in App.js
  // check if the image is in favs
  const isFaved = isInFavs(image.id);

  // click heart to call toggleFav function
  const handleClick = () => toggleFav(image);

  return (
    <div
      onClick={handleClick}
      className="text-xl drop-shadow p-1 hover:drop-shadow-xl transition-shadow"
    >
      <button>
        {isFaved ? (
          <FaHeart className="text-rose-500 drop-shadow" />
        ) : (
          <FaRegHeart className="text-white drop-shadow" />
        )}
      </button>
    </div>
  );
};

export default FavButton;
