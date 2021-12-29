import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Project from "../components/Project";
import projects from "../components/data";

const ProjectPage = () => {
  return (
    <Container>
      <Header title={"Project Info"} />
      <main>
        <section className="section">
          <Project items={projects} />
        </section>
      </main>
    </Container>
  );
};

const Container = styled.div`
  padding: 200px 30px;
`;

export default ProjectPage;
