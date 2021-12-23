import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import ProjectsPage from "./pages/projectsPage";
import ReactProjectsPage from "./pages/reactProjectsPage";

import AboutPage from "./pages/aboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/react" element={<ReactProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
