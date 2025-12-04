import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { reset } from "./actions";

const store = configureStore({
  // a store is a collection of states
  reducer: {
    // bundles all the reducers
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, addSong, removeSong, addMovie, removeMovie, reset };

/*
const startState = store.getState();
console.log(JSON.stringify(startState));

store.dispatch({ type: "song/addSong", payload: "a song name" });

console.log(JSON.stringify(store.getState()));

// view an action creator from slice
console.log(songSlice.actions.addSong("another song"));

store.dispatch(songSlice.actions.addSong("protect ya neck"));

console.log(JSON.stringify(store.getState()));
*/
