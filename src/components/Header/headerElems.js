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
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, transparent 90%);
  /* background-image: url(${HeaderBgImg}); */
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
