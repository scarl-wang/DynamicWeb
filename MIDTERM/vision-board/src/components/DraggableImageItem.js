import { useContext } from "react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Favorite from "./FavButton";
import FavButton from "./FavButton";
import { VisionBoardContext } from "../VisionBoardContext";

// define type of item to be dragged
const ItemType = "IMAGE";

const ImageItem = (props) => {
  const { image, index } = props;
  const { toggleFav, isInFavs, moveImage } = useContext(VisionBoardContext);
  const showFavButton = toggleFav && isInFavs;

  // ref to the DOM element
  const ref = useRef(null);

  // useDrag hook makes this component draggable
  const [{ isDragging }, drag] = useDrag({
    type: ItemType, // type of item being dragged
    item: { index }, // data passed during drag
    collect: (monitor) => ({
      // track if this item is currently being dragged
      isDragging: monitor.isDragging(),
    }),
  });

  // useDrop hook makes this component accept drops
  const [{ isOver }, drop] = useDrop({
    accept: ItemType, // only accept items of this type
    hover: (draggedItem) => {
      // draggedItem contains the data from useDrag's item prop

      if (draggedItem.index !== index) {
        // if hovering over a different item, reorder
        moveImage(draggedItem.index, index);
        // update the dragged item's index
        draggedItem.index = index;
      }
    },
    collect: (monitor) => ({
      // track if something is hovering over the component
      isOver: monitor.isOver(),
    }),
  });

  // combine drag and drop refs with component ref
  drag(drop(ref));

  // return individual image hearts with heart button on top right
  return (
    <div
      ref={ref}
      className={`relative transition-opacity ${
        isDragging ? "opacity-50" : "opacity-100"
      } ${isOver ? "scale-105" : "scale-100"}`}
      style={{ cursor: "move" }}
    >
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

      {/* Optional: Visual indicator when dragging */}
      {isDragging && (
        <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-lg" />
      )}
    </div>
  );
};

export default ImageItem;
