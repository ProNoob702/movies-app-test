import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { selectMovieDetails } from "../../redux-store/selectors/movies.selectors";
import { useAppSelector } from "../../redux-store/store";
import parse from "html-react-parser";

export const MovieDetail: React.FC<{}> = () => {
  const { movieId } = useParams();
  const mov = useAppSelector((state) => (movieId ? selectMovieDetails(state, movieId) : undefined));
  // return <>{mov ? <div>{parse(mov.descriptionHtml)}</div> : null}</>;
  return (
    <div
      className="py-20 h-screen bg-gray-500"
      style={{
        backgroundImage: `linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url(${mov?.imgUrl}) `,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-6 mt-40">
        <h2 className="text-4xl font-bold mb-2 text-white">Experience Luxury Like Never Before</h2>
        <h3 className="text-2xl mb-8 text-gray-200">50+ Exotic locations across the globe.</h3>
        <button className="bg-transparent text-white border-2 font-bold rounded-1xl py-4 px-8 shadow-lg uppercase tracking-wider">
          Explore Locations
        </button>
      </div>
    </div>
  );
};

// style="background-image:linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url('images/luxury.jpg')">
