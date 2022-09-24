import React from "react";
import { connect } from "react-redux";
import { AppRoutes } from "../routes/Routes";
import { ToastContainer } from "react-toastify";
import { IMovie } from "../models/IMovie";
import { fetchMoviesList } from "../services/movies.service";
import { appActions, AppDispatch, IAppState } from "../redux-store/store";

interface IProps {
  setMovies?: (newMovies: IMovie[]) => void;
}

class MainComponent extends React.Component<IProps> {
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
    return (
      <>
        <AppRoutes />
        <ToastContainer />
      </>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setMovies: (newMovies: IMovie[]) => {
    dispatch(appActions.setMovies(newMovies));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
