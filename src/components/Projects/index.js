import React from "react";
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH1,
  ProjectsH2,
  ProjectsP,
} from "./ProjectsElems";
import { reactIcon, fullStackIcon, jsIcon } from "../../images";

const Projects = () => {
  return (
    <>
      <ProjectsContainer>
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsWrapper>
          <ProjectsCard to="/reactprojects">
            <ProjectsIcon src={reactIcon} />
            <ProjectsP>Brief desciption of the project</ProjectsP>
            <ProjectsH2>React</ProjectsH2>
          </ProjectsCard>
          <ProjectsCard to="/reactprojects">
            <ProjectsIcon src={fullStackIcon} />
            <ProjectsP>Brief desciption of the project</ProjectsP>
            <ProjectsH2>Full-Stack</ProjectsH2>
          </ProjectsCard>
          <ProjectsCard to="/reactprojects">
            <ProjectsIcon src={jsIcon} />
            <ProjectsP>Brief desciption of the project</ProjectsP>
            <ProjectsH2>JS</ProjectsH2>
          </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
