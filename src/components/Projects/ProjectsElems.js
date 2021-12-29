import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 8px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: darkgrey;
    color: #010606;
  }
`;
