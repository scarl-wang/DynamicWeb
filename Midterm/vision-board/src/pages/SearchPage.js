import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import searchImages from "../api";
import { useState } from "react";

const SearchPage = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    console.log(result);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default SearchPage;
