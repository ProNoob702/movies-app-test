import "./MoviesList.scss";
import MoviesZone from "./MoviesZone";
import { SearchBar } from "./SearchBar";

export const MoviesList: React.FC<{}> = () => {
  return (
    <>
      <SearchBar />
      <MoviesZone />
    </>
  );
};
