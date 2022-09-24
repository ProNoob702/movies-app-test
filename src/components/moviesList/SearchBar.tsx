import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { getSearchInputValue } from "../../redux-store/selectors/movies.selectors";
import { appActions, useAppSelector } from "../../redux-store/store";

export const SearchBar: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const searchText = useAppSelector((state) => getSearchInputValue(state));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(appActions.doSearchForMovies(e.target.value));
  };

  const debouncedHandleSearch = useDebounce(handleSearch, 500);

  return (
    <form className="w-1/2 m-auto">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
          <FontAwesomeIcon className="w-4 h-4 text-gray-500" icon={faMagnifyingGlass} />
        </div>
        <input
          type="search"
          id="default-search"
          className="custom-search-input"
          placeholder="Search Movies..."
          onChange={debouncedHandleSearch}
          required
          defaultValue={searchText}
        />
      </div>
    </form>
  );
};
