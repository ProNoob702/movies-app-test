import { IMovie } from "../../models/IMovie";
import { IAppState } from "../store";

export const getMoviesList = (state: IAppState): IMovie[] | null => {
  return state.moviesState.moviesList;
};
