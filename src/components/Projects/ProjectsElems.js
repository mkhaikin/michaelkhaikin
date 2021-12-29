import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ProjectsCard = styled(LinkR)`
  background: #fff;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #2f2e41;
  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #2f2e41;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;