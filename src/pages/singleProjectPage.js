import React from "react";
import Header from "../components/Header";
import SingleProject from "../components/SingleProject";
import projects from "../components/data";

const ProjectPage = () => {
  return (
    <div className="container">
      <Header title={"Project Info"} />
      <main>
        <section className="section">
          <SingleProject items={projects} />
        </section>
      </main>
    </div>
  );
};

export default ProjectPage;
