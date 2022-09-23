import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMoviesList } from "../../redux-store/selectors/movies.selectors";
import { useAppSelector } from "../../redux-store/store";
import "./MoviesList.scss";

export const MoviesList: React.FC<{}> = () => {
  const moviesList = useAppSelector((x) => getMoviesList(x));
  return (
    <>
      <SearchBar />
      <div>
        {moviesList?.map((x) => (
          <>
            <span key={x.name}>{x.name}</span>
            <br />
          </>
        ))}
      </div>
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
