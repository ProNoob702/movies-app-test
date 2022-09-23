import { Outlet } from "react-router-dom";

export const MoviesList: React.FC<{}> = () => {
  return (
    <>
      <div>Movies list</div>
      <Outlet />
    </>
  );
};
