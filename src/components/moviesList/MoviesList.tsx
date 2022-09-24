import { Link } from "react-router-dom";
import { getMoviesList } from "../../redux-store/selectors/movies.selectors";
import { useAppSelector } from "../../redux-store/store";
import { CardComponent } from "../shared/card.component";
import "./MoviesList.scss";
import { SearchBar } from "./SearchBar";

export const MoviesList: React.FC<{}> = () => {
  return (
    <>
      <SearchBar />
      <MoviesZone />
    </>
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
