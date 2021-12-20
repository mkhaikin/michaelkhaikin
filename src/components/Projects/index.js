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
        <ProjectsH1>My Projects</ProjectsH1>
        <ProjectsWrapper>
          <ProjectsCard>
            <ProjectsIcon src={reactIcon} />
            {/* the icon is a github icon maybe even link */}

            <ProjectsP>Brief desciption of the project</ProjectsP>
            <ProjectsH2>React</ProjectsH2>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={fullStackIcon} />
            {/* the icon is a github icon maybe even link */}

            <ProjectsP>Brief desciption of the project</ProjectsP>
            <ProjectsH2>Full-Stack</ProjectsH2>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={jsIcon} />
            {/* the icon is a github icon maybe even link */}

            <ProjectsP>Brief desciption of the project</ProjectsP>
            <ProjectsH2>JS</ProjectsH2>
          </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
