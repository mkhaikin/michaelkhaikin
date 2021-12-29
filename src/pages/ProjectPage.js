import React from "react";
import Project from "../components/Project";
import projects from "../components/data";

const ProjectPage = () => {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Project Item</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Project items={projects} />
    </main>
  );
};

export default ProjectPage;
