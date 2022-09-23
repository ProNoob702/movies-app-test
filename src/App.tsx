import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { AppLayout } from "./layout/Layout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AppLayout>
      <div>zouta</div>
      <ToastContainer />
    </AppLayout>
  );
}

export default App;
