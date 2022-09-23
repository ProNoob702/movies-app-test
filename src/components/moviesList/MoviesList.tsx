import { getMoviesList } from "../../redux-store/selectors/movies.selectors";
import { useAppSelector } from "../../redux-store/store";

export const MoviesList: React.FC<{}> = () => {
  const moviesList = useAppSelector((x) => getMoviesList(x));
  return (
    <>
      <div>Movies list</div>
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
