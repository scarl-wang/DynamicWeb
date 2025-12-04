// where we combine our slices into store

import { configureStore } from "@reduxjs/toolkit";
import {
  artReducer,
  changeSearchTerm,
  addArt,
  removeArt,
} from "./slices/artSlice";
import { formReducer, changeName, changePrice } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    art: artReducer,
    form: formReducer,
  },
});

console.log(store.getState());

// this is the ONLY access point for all imports from store
export { store, changeName, changePrice, addArt, removeArt, changeSearchTerm };
