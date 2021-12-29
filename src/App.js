import React, { useState } from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages";
import ProjectsPage from "./pages/projectsPage";
import ProjectPage from "./pages/ProjectPage";
import Error from "./components/404";

import AboutPage from "./pages/aboutPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/project/:userId" element={<ProjectPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
