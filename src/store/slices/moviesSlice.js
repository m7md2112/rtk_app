import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
  name: "MOVIES",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => []);
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
