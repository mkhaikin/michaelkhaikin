import React from "react";
import { useParams } from "react-router-dom";
import {
  Wrapper,
  InfoContainer,
  InfoSection,
  Title,
  Description,
  Links,
  GitHub,
  Site,
} from "./projectElems";

const Project = ({ items }) => {
  let { userId } = useParams();
  let id = userId - 1;
  return (
    <Wrapper className="wrapper">
      <InfoContainer className="InfoContainer">
        <InfoSection className="infoSection">
          <Title>{items[id].title}</Title>
          <p className="item-text">{items[id].desc}</p>
        </InfoSection>
        <Description>
          <img src={items[id].img} alt={items[id].title} className="photo" />
          <Links>
            <GitHub>Repo</GitHub>
            <Site>Site</Site>
          </Links>
        </Description>
      </InfoContainer>
    </Wrapper>
  );
};

export default Project;
