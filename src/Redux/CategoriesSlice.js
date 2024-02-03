import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getCategories = createAsyncThunk(
  "CategoriesSlice/getCategories",

  async () => {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );
    return data.data;
  }
);

let initialState = { categories: [], isLoading: false, isError: null };

let CategoriesSlice = createSlice({
  name: "CategoriesSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      // state.categories = action.payload;
      state.isLoading = false;
    });
  },
});

export let CategoriesReducer = CategoriesSlice.reducer;
