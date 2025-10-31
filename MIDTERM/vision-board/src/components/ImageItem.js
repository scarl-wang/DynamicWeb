import { useContext } from "react";
import Favorite from "./FavButton";
import FavButton from "./FavButton";
import { VisionBoardContext } from "../VisionBoardContext";

const ImageItem = (props) => {
  const { image, index } = props;
  const { toggleFav, isInFavs } = useContext(VisionBoardContext);
  const showFavButton = toggleFav && isInFavs;

  // return individual image hearts with heart button on top right
  return (
    <div className={"relative"} style={{ cursor: "move" }}>
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
