import ImageList from "../components/ImageList";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const FavoritesPage = ({ favs }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 p-2">My Vision Board</h1>

      {/* when there are no favorited photos, show empty state and direct to search page*/}
      {favs.length === 0 ? (
        <div className="text-center mt-12 p-2">
          <p className="text-gray-500 text-lg">Nothing here yet...</p>
          <p className="text-gray-400 mt-2">
            <Link to="/">
              <Button text="Go Explore" />
            </Link>
          </p>
        </div>
      ) : null}

      {/* display favorited images in a list */}
      <ImageList images={favs} />
    </div>
  );
};

export default FavoritesPage;
