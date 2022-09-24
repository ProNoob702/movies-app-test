import { Link } from "react-router-dom";
import { getMoviesList } from "../../redux-store/selectors/movies.selectors";
import { appActions, AppDispatch, IAppState } from "../../redux-store/store";
import { CardComponent } from "../shared/Card";
import React from "react";
import { connect } from "react-redux";
import { IMovie } from "../../models/IMovie";
import { fetchMoviesList } from "../../services/movies.service";

interface MoviesZoneProps {
  moviesList?: IMovie[] | null;
  setMovies?: (newMovies: IMovie[]) => void;
}

class MoviesZone extends React.Component<MoviesZoneProps> {
  componentDidMount(): void {
    const self = this;
    fetchMoviesList()
      .then((res) => {
        if (self.props.setMovies) {
          self.props.setMovies(res);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    if (!this.props.moviesList) return null;
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
    debugger;
    dispatch(appActions.setMovies(newMovies));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesZone);
