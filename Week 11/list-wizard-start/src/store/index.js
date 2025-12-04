import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // these are action creators, they generate your action.type and receive payload from where you dispatch it
    // name + "/" + functionName
    // 'song/addSong'
    addSong(state, action) {
      // we can directly mutate state here because of toolkit's use of immer
      state.push(action.payload);
    },
    removeSong(state, action) {
      // action.payload is our song name string for these reducers
      // get the index of the song we passed in via payload
      const index = state.indexOf(action.payload);
      // call splice with that index and remove just the one song
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
});

export { store };
export const { addSong, removeSong } = songSlice.actions;
