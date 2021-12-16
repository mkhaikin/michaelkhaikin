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
import Icon1 from "../../images/project1.svg";

const Projects = () => {
  return (
    <>
      <ProjectsContainer>
        <ProjectsH1>My Projects</ProjectsH1>
        <ProjectsWrapper>
          <ProjectsCard>
            <ProjectsIcon src={Icon1} />
            {/* the icon is a github icon maybe even link */}

            <ProjectsP>Brief desciption of the project</ProjectsP>
            <ProjectsH2>Project1</ProjectsH2>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon1} />
            {/* the icon is a github icon maybe even link */}

            <ProjectsP>Brief desciption of the project</ProjectsP>
            <ProjectsH2>Project2</ProjectsH2>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={Icon1} />
            {/* the icon is a github icon maybe even link */}

            <ProjectsP>Brief desciption of the project</ProjectsP>
            <ProjectsH2>Project3</ProjectsH2>
          </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
