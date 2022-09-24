import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { selectMovieDetails } from "../../redux-store/selectors/movies.selectors";
import { useAppSelector } from "../../redux-store/store";
import parse from "html-react-parser";
import { BackBtn } from "../shared/BackBtn";

export const MovieDetail: React.FC<{}> = () => {
  const { movieId } = useParams();
  const mov = useAppSelector((state) => (movieId ? selectMovieDetails(state, movieId) : undefined));
  if (!mov) return null;
  return (
    <>
      {/* Upper SIDE */}
      <div
        className="py-20 bg-gray-500"
        style={{
          backgroundImage: `linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url(${mov?.imgUrl}) `,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          height: "350px",
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-2 text-white">{mov?.name}</h2>
          <h3 className="text-2xl mb-8 text-gray-200">{mov?.descriptionRaw}</h3>
          <div className="flex flex-row">
            {mov?.genre.map((gnr, i) => (
              <div
                className="bg-transparent text-white border-2 font-bold rounded-1xl py-4 px-8 shadow-lg uppercase tracking-wider"
                style={{
                  marginLeft: i !== 0 ? "8px" : "0px",
                }}
              >
                {gnr}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* HTML DESCRIPTION SIDE */}
      <div className="mt-4 movieDescriptionHtml">{parse(mov.descriptionHtml)}</div>
      <BackBtn />
    </>
  );
};
