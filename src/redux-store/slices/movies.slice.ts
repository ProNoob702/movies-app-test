import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { moviesData } from "../../dummie-data/movies.data";
import { IMovie, MovieGenre } from "../../models/IMovie";

interface MoviesSliceState {
  moviesList: IMovie[];
  searchInputValue: string;
  genreFilterType: MovieGenre | "All";
}

const initialState: MoviesSliceState = {
  moviesList: [...moviesData],
  searchInputValue: "",
  genreFilterType: "All",
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
        applySearch(state, newSearchInputVal);
      } else {
        // put back inial state
        state.moviesList = [...moviesData];
      }
    },
    doSetNewGenreFilter(state, action: PayloadAction<MovieGenre | "All">) {
      applyFilterByGenre(state, action.payload);
    },
  },
});

const applySearch = (state: WritableDraft<MoviesSliceState>, newSearchInputVal: string) => {
  state.searchInputValue = newSearchInputVal;
  const newMovies = moviesData.filter((x) => {
    return x.name.toLocaleLowerCase().includes(newSearchInputVal);
  });
  state.moviesList = newMovies;
};

const applyFilterByGenre = (state: WritableDraft<MoviesSliceState>, newGenre: MovieGenre | "All") => {
  if (newGenre !== "All") {
    applySearch(state, state.searchInputValue);
    const currentMovies = state.moviesList;
    const newMovies = currentMovies.filter((x) => x.genre.includes(newGenre));
    state.moviesList = newMovies;
  } else {
    applySearch(state, state.searchInputValue);
  }
};

export const moviesActions = MoviesSlice.actions;
export const moviesReducer = MoviesSlice.reducer;
