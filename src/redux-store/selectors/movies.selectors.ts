import { createSelector } from "@reduxjs/toolkit";
import { IMovie } from "../../models/IMovie";
import { IAppState } from "../store";

export const getMoviesList = (state: IAppState): IMovie[] | null => {
  return state.moviesState.moviesList;
};

export const selectMovieDetails = createSelector(
  (state: IAppState, movieId: string) => getMoviesList(state),
  (state: IAppState, movieId: string) => movieId,
  (moviesList, movieId): IMovie | undefined => {
    if (moviesList) {
      return moviesList.find((x) => x.id === movieId);
    }
  }
);

export const getSearchInputValue = (state: IAppState): string => {
  return state.moviesState.searchInputValue;
};
