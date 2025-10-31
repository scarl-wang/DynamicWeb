import { createContext, useState, useContext } from "react";

// useContext() allows you data sharing cross the component tree
// https://react.dev/learn/passing-data-deeply-with-context
//

export const VisionBoardContext = createContext();
// creates an empty "container" to hold shared data

// this provider component will wrap the app
// everything wrapped by the provide can access the context states
export const VisionBoardProvider = ({ children }) => {
  // ---- all the state management logic lives here

  // an array to store faved images
  const [favs, setFavs] = useState([]);
  // a state for search results
  const [searchResults, setSearchResults] = useState([]);

  // ---- moved these functions from App.js to here

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

  // new function to handle reordering
  const moveImage = (dragIndex, hoverIndex) => {
    const newFavs = [...favs];
    const draggedImage = newFavs[dragIndex];

    // remove the dragged item from its original position
    newFavs.splice(dragIndex, 1);
    // insert it at the new position
    newFavs.splice(hoverIndex, 0, draggedImage);

    setFavs(newFavs);
  };

  // the value object will contain everything to share
  const value = {
    favs,
    setFavs,
    searchResults,
    setSearchResults,
    isInFavs,
    toggleFav,
  };

  return (
    // .Provider is a special component that comes with every context
    // value={value} loads the data into the provider, making them accessible to any child component
    <VisionBoardContext.Provider value={value}>
      {children}
    </VisionBoardContext.Provider>
  );
};
