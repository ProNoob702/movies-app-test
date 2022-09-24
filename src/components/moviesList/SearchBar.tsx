import { useDispatch } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { GenreArr, MovieGenre } from "../../models/IMovie";
import { getSearchInputValue } from "../../redux-store/selectors/movies.selectors";
import { appActions, useAppSelector } from "../../redux-store/store";

export const SearchBar: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const searchText = useAppSelector((state) => getSearchInputValue(state));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(appActions.doSearchForMovies(e.target.value));
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(appActions.doSetNewGenreFilter(e.target.value as MovieGenre));
  };

  const debouncedHandleSearch = useDebounce(handleSearch, 500);

  return (
    <form className="w-1/2 m-auto">
      <div className="flex">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
          Search
        </label>
        <select className="custom-select" onChange={handleGenreChange}>
          <option value={"All"}>All</option>
          {GenreArr.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="custom-search-input"
            placeholder="Search Movies..."
            onChange={debouncedHandleSearch}
            required
            defaultValue={searchText}
          />
        </div>
      </div>
    </form>
  );
};
