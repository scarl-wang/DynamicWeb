import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { removeArt } from "../store";

// what NOT to do:
// {id, nme, price, bold: true} - this is a display concern
const memoizedArt = createSelector(
  // an array of mini selectors that access values from different slices
  [(state) => state.art.data, (state) => state.art.searchTerm],
  // a function that receives the values from the first argument
  (data, searchTerm) =>
    data.filter((art) =>
      art.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

const ArtList = () => {
  const dispatch = useDispatch();

  // first pass before we needed anything from form slice
  //   const artList = useSelector(({ art: { searchTerm, data } }) => {
  //     // does the name of an art item contain our searchTerm
  //     return data.filter((art) =>
  //       // whenever we filter, we only return the items if the condition is true
  //       art.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   });

  // refactor to access both slices
  const artList = useSelector(memoizedArt); // artSlice
  const name = useSelector((state) => state.form.name); // formSlice

  const handleArtDelete = (art) => {
    dispatch(removeArt(art.id));
  };

  const renderedArt = artList.map((art) => {
    // since bold is a display only concern, we should decide where to bold within our mapping function
    // boolean compare lowercased version of art.name and our form name
    const isBold = name && art.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div
        key={art.id}
        className="border p-2 rounded flex flex-row justify-between items-center"
      >
        {/* && returns the last truthy value OR the first falsey value*/}
        <p className={`${isBold && "font-bold"}`}>
          {art.name} -- ${art.price}
        </p>
        <button
          onClick={() => handleArtDelete(art)}
          className="rounded bg-red-500 p-2 text-white"
        >
          x
        </button>
      </div>
    );
  });
  return <div>{renderedArt}</div>;
};

export default ArtList;
