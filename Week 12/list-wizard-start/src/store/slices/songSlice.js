import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // each of these are action creators (we get from Redux toolkit), they generate you action.type and receive payload from where you dispatched it
    // name +'/' + functionName
    // 'song/addSong'
    addSong(state, action) {
      // remember we can be bad babies and directly mutate state becuase of toolkit's use of immer
      state.push(action.payload);
    },
    removeSong(state, action) {
      // action.payload is our song name string for these reducers
      // get the index of the song we passed in via payload
      const index = state.indexOf(action.payload);
      // call splice with that index and remoe just the one song
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

export const songsReducer = songSlice.reducer;
export const { addSong, removeSong } = songSlice.actions;
