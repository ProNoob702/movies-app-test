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
  reducers: {
    doSearchForMovies(state, action: PayloadAction<string | null>) {
      // trim to avoid white search with whitespace
      const searchInputVal = action.payload?.trim()?.toLowerCase();
      // if there is input val => do search
      if (searchInputVal && searchInputVal.length > 0) {
        const newMovies = moviesData.filter((x) => {
          return x.name.toLocaleLowerCase().includes(searchInputVal);
        });
        state.moviesList = newMovies;
      } else {
        // put back inial state
        state.moviesList = [...moviesData];
      }
    },
  },
});

export const moviesActions = MoviesSlice.actions;
export const moviesReducer = MoviesSlice.reducer;
