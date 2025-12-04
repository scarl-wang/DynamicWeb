import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      // action.payload is our movie name string for these reducers
      // get the index of the movie we passed in via payload
      const index = state.indexOf(action.payload);
      // call splice with that index and remoe just the one movie
      state.splice(index, 1);
    },
  },
  extraReducers(builders) {
    // can listen for actions/action creators not managed by this slice
    builders.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const moviesReducer = movieSlice.reducer;
export const { addMovie, removeMovie } = movieSlice.actions;
