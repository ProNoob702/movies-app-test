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
      // trim to avoid search with whitespace
      const newSearchInputVal = action.payload?.trim()?.toLowerCase();
      if (newSearchInputVal != null) {
        state.searchInputValue = newSearchInputVal;
      }
      doSearchWithFilter(state);
    },
    doSetNewGenreFilter(state, action: PayloadAction<MovieGenre | "All">) {
      state.genreFilterType = action.payload;
      doSearchWithFilter(state);
    },
  },
});

const doSearchWithFilter = (state: WritableDraft<MoviesSliceState>) => {
  const startingData = [...moviesData];

  // apply search
  if (state.searchInputValue) {
    const moviesSearchRes = startingData.filter((x) => {
      return x.name.toLocaleLowerCase().includes(state.searchInputValue);
    });
    state.moviesList = moviesSearchRes;
  } else {
    state.moviesList = [...moviesData];
  }

  // apply filter by genre
  if (state.genreFilterType !== "All") {
    const currentMovies = state.moviesList;
    const moviesFilterRes = currentMovies.filter((x) => x.genre.includes(state.genreFilterType as MovieGenre));
    state.moviesList = moviesFilterRes;
  }
};

export const moviesActions = MoviesSlice.actions;
export const moviesReducer = MoviesSlice.reducer;
