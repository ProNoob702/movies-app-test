import "react-toastify/dist/ReactToastify.css";
import { AppLayout } from "./layout/Layout";
import MainComponent from "./components/Main";
import { Provider } from "react-redux";
import store from "./redux-store/store";

function App() {
  return (
    <Provider store={store}>
      <AppLayout>
        <MainComponent />
      </AppLayout>
    </Provider>
  );
}

export default App;
