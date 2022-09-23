import "react-toastify/dist/ReactToastify.css";
import { AppLayout } from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./redux-store/store";

function App() {
  return (
    <Provider store={store}>
      <AppLayout>
        <AppRoutes />
        <ToastContainer />
      </AppLayout>
    </Provider>
  );
}

export default App;
