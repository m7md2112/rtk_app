import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export {addMovie, removeMovie, addSong, removeSong}