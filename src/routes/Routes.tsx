import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MovieDetail } from "../components/movieDetail/MovieDetail";
import { MoviesList } from "../components/moviesList/MoviesList";

export const AppRoutes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={"/movies"} replace />} />
        <Route path="/movies" element={<MoviesList />}>
          <Route path="/detail/:movieId" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
