import {BrowserRouter} from "react-router-dom";
import Header from "./components/common/Header/Header";
import Router from "./components/common/Router/Router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
