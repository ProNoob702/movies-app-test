import { IMovie } from "../models/IMovie";

export const fetchMoviesList = async (): Promise<IMovie[]> => {
  const res = await fetch(process.env.PUBLIC_URL + "/dummyData/movies.data.json");
  return res.json();
};
