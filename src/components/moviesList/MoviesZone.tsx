import { Link } from "react-router-dom";
import { getMoviesList } from "../../redux-store/selectors/movies.selectors";
import { appActions, AppDispatch, IAppState } from "../../redux-store/store";
import { CardComponent } from "../shared/Card";
import React from "react";
import { connect } from "react-redux";
import { IMovie } from "../../models/IMovie";
import { fetchMoviesList } from "../../services/movies.service";
import { Spinner } from "../shared/Spinner";
import { NoResult } from "../shared/NoResult";

interface MoviesZoneProps {
  moviesList?: IMovie[] | null;
  setMovies?: (newMovies: IMovie[]) => void;
}

class MoviesZone extends React.Component<MoviesZoneProps> {
  componentDidMount(): void {
    const self = this;
    fetchMoviesList()
      .then((res) => {
        // setTimeout to emitate api call
        setTimeout(() => {
          if (self.props.setMovies) {
            self.props.setMovies(res);
          }
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    // if null than still fetching
    if (!this.props.moviesList) return <Spinner />;
    // if there is movies but no result
    if (this.props.moviesList && !this.props.moviesList?.length) return <NoResult />;
    return (
      <div className="mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {this.props.moviesList.map((mov) => (
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
  }
}

const mapStateToProps = (state: IAppState) => ({
  moviesList: getMoviesList(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setMovies: (newMovies: IMovie[]) => {
    dispatch(appActions.setMovies(newMovies));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesZone);
