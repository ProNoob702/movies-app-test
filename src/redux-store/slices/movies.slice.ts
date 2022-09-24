import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { moviesData } from "../../dummie-data/movies.data";
import { IMovie } from "../../models/IMovie";

interface MoviesSliceState {
  moviesList: IMovie[];
  searchInputValue: string;
}

const initialState: MoviesSliceState = {
  moviesList: [...moviesData],
  searchInputValue: "",
};

const MoviesSlice = createSlice({
  name: "MoviesSlice",
  initialState,
  reducers: {
    doSearchForMovies(state, action: PayloadAction<string | null>) {
      // trim to avoid white search with whitespace
      const newSearchInputVal = action.payload?.trim()?.toLowerCase();
      // if there is input val => do search
      if (newSearchInputVal && newSearchInputVal.length > 0) {
        state.searchInputValue = newSearchInputVal;
        const newMovies = moviesData.filter((x) => {
          return x.name.toLocaleLowerCase().includes(newSearchInputVal);
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
