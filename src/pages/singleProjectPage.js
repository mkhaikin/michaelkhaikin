import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Project from "../components/Project";
import projects from "../components/data";

const ProjectPage = () => {
  return (
    <div className="container">
      <Header title={"Project Info"} />
      <main>
        <section className="section">
          <Project items={projects} />
        </section>
      </main>
    </div>
  );
};

export default ProjectPage;
