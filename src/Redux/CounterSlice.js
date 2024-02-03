import { createSlice } from "@reduxjs/toolkit";

let initialState = { counter: 0, userName: "" };

let counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increase: (state) => {
      state.counter += 1;
    },
    decrease: (state) => {
      state.counter -= 1;
    },
  },
});

export let counterReducer = counterSlice.reducer;
export let { increase, decrease } = counterSlice.actions;
