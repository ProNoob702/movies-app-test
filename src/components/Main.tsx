import React from "react";
import { connect } from "react-redux";
import { AppRoutes } from "../routes/Routes";
import { ToastContainer } from "react-toastify";
import { IMovie } from "../models/IMovie";
import { fetchMoviesList } from "../services/movies.service";
import { appActions, AppDispatch, IAppState } from "../redux-store/store";
import { Spinner } from "./shared/Spinner";
import { getFetchingMoviesDoneStatus } from "../redux-store/selectors/movies.selectors";

interface IProps {
  isFetchingMovies?: boolean;
  setMovies?: (newMovies: IMovie[]) => void;
}

interface IState {
  isFetchingFinished: boolean;
}

class MainComponent extends React.Component<IProps, IState> {
  state: IState = {
    isFetchingFinished: false,
  };

  async componentDidMount() {
    const self = this;
    try {
      const res = await fetchMoviesList();
      setTimeout(() => {
        self.props.setMovies!(res);
      }, 1000);
    } catch (error) {
      self.props.setMovies!([]);
    }
    // } finally {
    //   self.setState((state) => ({
    //     isFetchingFinished: true,
    //   }));
    // }
  }

  render() {
    // if null than still fetching
    if (!this.props.isFetchingMovies) return <Spinner />;

    return (
      <>
        <AppRoutes />
        <ToastContainer />
      </>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  isFetchingMovies: getFetchingMoviesDoneStatus(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setMovies: (newMovies: IMovie[]) => {
    dispatch(appActions.setMovies(newMovies));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
