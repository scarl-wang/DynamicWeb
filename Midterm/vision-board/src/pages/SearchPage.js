import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import searchImages from "../api";
import { useState } from "react";

const SearchPage = ({ toggleFav, isInFavs }) => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  // passing props down
  return (
    <div className="p-8">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} toggleFav={toggleFav} isInFavs={isInFavs} />
    </div>
  );
};

export default SearchPage;
