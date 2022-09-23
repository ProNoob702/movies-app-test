import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoviesSliceState {}

const initialState: MoviesSliceState = {};

const MoviesSlice = createSlice({
  name: "MoviesSlice",
  initialState,
  reducers: {},
});

export const moviesActions = MoviesSlice.actions;
export const moviesReducer = MoviesSlice.reducer;
