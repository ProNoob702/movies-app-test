import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { moviesData } from "../../dummie-data/movies.data";
import { IMovie } from "../../models/IMovie";

interface MoviesSliceState {
  moviesList: IMovie[];
}

const initialState: MoviesSliceState = {
  moviesList: [...moviesData],
};

const MoviesSlice = createSlice({
  name: "MoviesSlice",
  initialState,
  reducers: {},
});

export const moviesActions = MoviesSlice.actions;
export const moviesReducer = MoviesSlice.reducer;
