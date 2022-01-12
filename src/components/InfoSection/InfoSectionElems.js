import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;

  background: ${({ lightBg }) =>
    lightBg
      ? // ? "linear-gradient(180deg, rgba(131,227,228,1) 0%, rgba(255,255,255,0) 13%)"
        "radial-gradient(circle, rgba(38,194,213,1) 0%, rgba(201,14,161,0) 100%)"
      : "radial-gradient(circle, rgba(38,213,106,1) 0%, rgba(201,14,161,0) 100%)"};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 600px;
  } ;
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? "'col1' 'col2' " : "'col1 col1' 'col2 col2'"};
  }
`;
export const Coloumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Coloumn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  /* padding-bottom: 60px; */
`;
export const TopLine = styled.p`
  color: #2f2e41;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: bolder;
  color: ${({ lightText }) => (lightText ? "#9517ff" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 36px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
