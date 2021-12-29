import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import ProjectsPage from "./pages/projectsPage";
import ProjectPage from "./pages/ProjectPage";
import Error from "./components/404";

import AboutPage from "./pages/aboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/project/:userId" element={<ProjectPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
