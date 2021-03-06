import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { HeroBgImg } from "../../images";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  min-height: 700px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(63, 61, 86, 0.3) 0%,
        rgba(249, 43, 94, 0.4) 50%,
        rgba(43, 249, 198, 0.3) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  background-image: url(${HeroBgImg});
`;
// Option for video
// export const VideoBg = styled.video`
//   width: 100%;
//   height: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
//   background: #232a34;
// `;
export const HeroContent = styled.div`
  z-index: 5;
  width: 80%;
  max-width: 1000px;
  position: absolute;
  padding: 60px 32px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 65px;
  display: flex;
  flex-direction: row;
  text-align: flex-start;
  font-weight: bold;
  line-height: 1.4;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  display: flex;
  align-items: flex-start;
  margin-top: 24px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const ArrowContainer = styled(LinkS)`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 50px;
`;
export const ArrowAwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  height: 150px;
  width: 150px;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: bounce;
  animation-timing-function: ease;

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-50px);
    }
    50% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
`;
export const Arrow = styled.p`
  display: flex;
  align-self: flex-end;
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 20px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
