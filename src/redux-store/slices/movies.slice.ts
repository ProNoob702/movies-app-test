import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../models/IMovie";

interface MoviesSliceState {
  moviesList: IMovie[];
}

const initialState: MoviesSliceState = {
  moviesList: [{ name: "zzz" }, { name: "bbb" }],
};

const MoviesSlice = createSlice({
  name: "MoviesSlice",
  initialState,
  reducers: {},
});

export const moviesActions = MoviesSlice.actions;
export const moviesReducer = MoviesSlice.reducer;
