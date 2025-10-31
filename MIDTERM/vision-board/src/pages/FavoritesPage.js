import DraggableImageList from "../components/DraggableImageList";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { VisionBoardContext } from "../VisionBoardContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const FavoritesPage = () => {
  const { favs, toggleFav, isInFav, moveImage } =
    useContext(VisionBoardContext);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6 h-screen bg-slate-100 rounded-lg">
        <h1 className="text-3xl font-bold mb-6 p-2">My Vision Board</h1>

        {/* when there are no favorited photos, show empty state and direct to search page*/}
        {favs.length === 0 ? (
          <div className="text-center mt-12 p-2">
            <p className="text-gray-500 text-lg">Nothing here yet...</p>
            <p className="text-gray-400 mt-4">
              <Link to="/">
                <Button text="Go Explore" />
              </Link>
            </p>
          </div>
        ) : null}

        {/* display favorited images in a list */}
        <DraggableImageList
          images={favs}
          moveImage={moveImage}
          toggleFav={toggleFav}
          isInFavs={isInFav}
        />
      </div>
    </DndProvider>
  );
};

export default FavoritesPage;
