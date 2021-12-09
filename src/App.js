import "./app.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <NavBar />
    </Router>
  );
}

export default App;
