import React, { useState, useEffect } from "react";
import "./app.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import ProjectsPage from "./pages/projectsPage";
import ProjectPage from "./pages/singleProjectPage";
import ResumePage from "./pages/resumePage";
import Error from "./components/404";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/project/:userId" element={<ProjectPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
