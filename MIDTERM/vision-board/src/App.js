import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/NavBar";

function App() {
  // create an array to store faved images
  const [favs, setFavs] = useState([]);

  // create a state for search results
  // have to move it here so it persists across tab switch
  const [searchResults, setSearchResults] = useState([]);

  // checks if image is in the array
  // https://www.w3schools.com/jsref/jsref_some.asp
  // returns boolean
  const isInFavs = (imageId) => {
    return favs.some((item) => item.id === imageId);
  };

  // function to add/remove images
  const toggleFav = (image) => {
    // check if image is in favs

    if (isInFavs(image.id)) {
      // keep everything except the image unfavorited
      const newFavs = favs.filter((item) => item.id !== image.id);
      setFavs(newFavs);
    } else {
      // copy all old items and add new image
      const newFavs = [image, ...favs];
      setFavs(newFavs);
    }
  };

  return (
    <div className="flex flex-col mx-4">
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <SearchPage
                toggleFav={toggleFav}
                isInFavs={isInFavs}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
              />
            }
          ></Route>
          <Route
            path="/favorites"
            element={<FavoritesPage favs={favs} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
