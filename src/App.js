import "./App.css";
import Header from "../src/Components/Header";
import { BrowserRouter as Router } from "react-router-dom";
// import SideBar from "./Components/SideBar";

function App() {
  return (
    <Router>
      {/* <SideBar /> */}
      <Header />
    </Router>
  );
}

export default App;
