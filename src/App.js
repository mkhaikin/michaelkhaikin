import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import ProjectsPage from "./pages/projectsPage";
import AboutPage from "./pages/aboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/projects" element={<ProjectsPage />} exact />
        <Route path="/about" element={<AboutPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
