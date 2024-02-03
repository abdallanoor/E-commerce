import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./CounterSlice";
import { CategoriesReducer } from "./CategoriesSlice";

export let store = configureStore({
  reducer: {
    counter: counterReducer,
    categories: CategoriesReducer,
  },
});
