import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IMovie } from "../../models/IMovie";
import { getMoviesList } from "../../redux-store/selectors/movies.selectors";
import { useAppSelector } from "../../redux-store/store";
import { NiceBtn } from "../shared/btn.component";
import { CardComponent } from "../shared/card.component";
import "./MoviesList.scss";

export const MoviesList: React.FC<{}> = () => {
  const moviesList = useAppSelector((x) => getMoviesList(x));
  return (
    <>
      <SearchBar />
      {moviesList ? <MoviesZone movies={moviesList} /> : null}
    </>
  );
};

const SearchBar: React.FC<{}> = () => {
  return (
    <form>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
          <FontAwesomeIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" icon={faMagnifyingGlass} />
        </div>
        <input
          type="search"
          id="default-search"
          className="custom-search-input"
          placeholder="Search Movies..."
          required
        />
        <button type="submit" className="custom-search-btn">
          Search
        </button>
      </div>
    </form>
  );
};

const MoviesZone: React.FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
      {movies.map((mov) => (
        <CardComponent
          key={mov.id}
          title={mov.name}
          chips={mov.genre}
          description={mov.descriptionRaw}
          imgUrl={mov.imgUrl}
          imgHeight={280}
        />
      ))}
    </div>
  );
};
