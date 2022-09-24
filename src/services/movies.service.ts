import { IMovie } from "../models/IMovie";

export const fetchMoviesList = (): Promise<IMovie[]> => {
  return fetch(process.env.PUBLIC_URL + "./movies.data.json").then((r) => r.json());
};
