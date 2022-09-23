import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { AppLayout } from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/Routes";

function App() {
  return (
    <AppLayout>
      <AppRoutes />
      <ToastContainer />
    </AppLayout>
  );
}

export default App;
