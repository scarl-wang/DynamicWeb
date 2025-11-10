import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import searchImages from "../api";
import { useContext } from "react";
import { VisionBoardContext } from "../VisionBoardContext";

const SearchPage = () => {
  const { searchResults, setSearchResults } = useContext(VisionBoardContext);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setSearchResults(result);
  };

  return (
    <div className="p-6 h-screen bg-slate-100 rounded-lg">
      <SearchBar onSubmit={handleSubmit} />

      {/* show placeholder when no search terms have been entered */}
      {searchResults.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">
            Build your vision board
          </h2>
          <p className="text-gray-500 max-w-md">
            Search for images that inspire you
          </p>
        </div>
      ) : (
        /* otherwise, show search results */
        <ImageList images={searchResults} />
      )}
    </div>
  );
};

export default SearchPage;
