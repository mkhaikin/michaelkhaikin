import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Coloumn1,
  TextWrapper,
  Heading,
  SubTitle,
  BtnWrap,
  Coloumn2,
  ImgWrap,
  Img,
} from "../InfoSection/InfoSectionElems";
import { Button } from "../ButtonElems";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  heading,
  darktext,
  desc,
  buttonLabel,
  imgSrc,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Coloumn1>
              <TextWrapper>
                <Heading lightText={lightText}>{heading}</Heading>
                <SubTitle darktext={darktext}>{desc}</SubTitle>
                <BtnWrap>
                  <Button to="home">{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Coloumn1>
            <Coloumn2>
              <ImgWrap>
                <Img src={imgSrc} alt={alt} />
              </ImgWrap>
            </Coloumn2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
