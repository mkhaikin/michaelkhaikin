import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;

  /* @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  } */
`;

export const AboutH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 48px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 32px;
  }
`;
export const AboutWrapper = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  max-width: 600px;
  padding: 30px;
`;
export const AboutP = styled.p`
  font-size: 1rem;
  text-align: center;
  padding-bottom: 24px;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const SkillsH2 = styled.div`
  font-size: 1.5rem;
  color: #010606;
  margin-bottom: 28px;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;
export const SkillIconsWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;
export const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-size: 48px;
  align-items: center;

  span {
    font-size: 18px;
  }
`;
