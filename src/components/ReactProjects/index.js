import React from "react";
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH1,
  ProjectsH2,
  ProjectsP,
} from "./reactProjectsElems";
import { reactIcon, fullStackIcon, jsIcon } from "../../images";

const ReactProjects = () => {
  return (
    <>
      <ProjectsContainer>
        <ProjectsH1>React Projects</ProjectsH1>
        <ProjectsWrapper>
          <ProjectsCard to="/react-projects">
            <ProjectsIcon src={reactIcon} />
            <ProjectsP>Desc 1</ProjectsP>
            <ProjectsH2>Name 1</ProjectsH2>
          </ProjectsCard>
          <ProjectsCard to="/reactprojects">
            <ProjectsIcon src={fullStackIcon} />
            <ProjectsP>Desc 2</ProjectsP>
            <ProjectsH2>Name 2</ProjectsH2>
          </ProjectsCard>
          <ProjectsCard to="/reactprojects">
            <ProjectsIcon src={jsIcon} />
            <ProjectsP>Desc 3</ProjectsP>
            <ProjectsH2>Name 3</ProjectsH2>
          </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default ReactProjects;
