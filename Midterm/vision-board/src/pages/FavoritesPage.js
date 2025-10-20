import ImageList from "../components/ImageList";
import { Link } from "react-router-dom";

const FavoritesPage = ({ favs }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 p-2">Your Favorites</h1>

      {favs.length === 0 ? (
        <div className="text-center mt-12 p-2">
          <p className="text-gray-500 text-lg">No favorites yet! 💔</p>
          <p className="text-gray-400 mt-2">
            <Link to="/">
              <button className="px-4 py-2 text-sm min-w-20 max-w-40 justify-self-end bg-black text-white rounded-full hover:bg-rose-600">
                Go Explore
              </button>
            </Link>
          </p>
        </div>
      ) : null}
      <ImageList images={favs} />
    </div>
  );
};

export default FavoritesPage;
