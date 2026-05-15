// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Createslice";
import applyReducer from './applySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
      apply: applyReducer
  }

});