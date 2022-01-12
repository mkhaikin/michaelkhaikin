import styled from "styled-components";
import { HeaderBgImg } from "../../images";

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const ImageBg = styled.div`
  border: none;
  width: 100%;
  height: 100%;
  /* -o-object-fit: cover;
  object-fit: cover; */
  background-image: url(${HeaderBgImg});
  background: linear-gradient(
    180deg,
    rgba(38, 213, 106, 1) 0%,
    rgba(62, 201, 14, 0) 100%
  );
`;

export const Title = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
