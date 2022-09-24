import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMoviesList } from "../../redux-store/selectors/movies.selectors";
import { appActions, useAppSelector } from "../../redux-store/store";
import { CardComponent } from "../shared/card.component";
import "./MoviesList.scss";

export const MoviesList: React.FC<{}> = () => {
  return (
    <>
      <SearchBar />
      <MoviesZone />
    </>
  );
};

const SearchBar: React.FC<{}> = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleUpdateSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(appActions.doSearchForMovies(searchText));
  };

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
          onChange={handleUpdateSearchText}
          value={searchText}
          required
        />
        <button type="submit" className="custom-search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </form>
  );
};

const MoviesZone: React.FC<{}> = () => {
  const moviesList = useAppSelector((x) => getMoviesList(x));
  if (!moviesList) return null;
  return (
    <div className="mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
      {moviesList.map((mov) => (
        <Link key={mov.id} to={`/detail/${mov.id}`}>
          <CardComponent
            title={mov.name}
            chips={mov.genre}
            description={mov.descriptionRaw}
            imgUrl={mov.imgUrl}
            imgHeight={280}
          />
        </Link>
      ))}
    </div>
  );
};
