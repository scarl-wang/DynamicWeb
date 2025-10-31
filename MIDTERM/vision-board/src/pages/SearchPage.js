import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import searchImages from "../api";
import { useContext } from "react";
import { VisionBoardContext } from "../VisionBoardContext";

const SearchPage = () => {
  const { searchResults, setSearchResults, toggleFav, isInFavs } =
    useContext(VisionBoardContext);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setSearchResults(result);
  };

  return (
    <div className="p-6 h-screen bg-slate-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 p-2">Build Your Vision Board</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList
        images={searchResults}
        toggleFav={toggleFav}
        isInFavs={isInFavs}
      />
    </div>
  );
};

export default SearchPage;
