import { useParams } from "react-router-dom";
import { selectMovieDetails } from "../../redux-store/selectors/movies.selectors";
import { useAppSelector } from "../../redux-store/store";
import parse from "html-react-parser";

export const MovieDetail: React.FC<{}> = () => {
  const { movieId } = useParams();
  const mov = useAppSelector((state) => (movieId ? selectMovieDetails(state, movieId) : undefined));
  return <>{mov ? <div>{parse(mov.descriptionHtml)}</div> : null}</>;
};
