import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Coloumn1,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  Coloumn2,
  ImgWrap,
  Img,
} from "../InfoSection/InfoSectionElems";
import { BtnLink } from "../ButtonElems";
// import { NavBtn, NavBtnLink } from "../NavBar/NavbarElems";

const InfoSection = ({
  id,
  to,
  lightBg,
  imgStart,
  lightText,
  topLine,
  heading,
  darkText,
  desc,
  buttonLabel,
  imgSrc,
  alt,
  lightTextDesc,
  primary,
  dark,
}) => {
  // const linkTo = String(to);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart} className="row">
            <Coloumn1>
              <TextWrapper className="TextWrapper">
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{heading}</Heading>
                <SubTitle darkText={darkText}>{desc}</SubTitle>
                <BtnWrap>
                  <BtnLink
                    to={String(to)}
                    // smooth={true}
                    // duration={500}
                    // spy={true}
                    // exact="true"
                    // offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </BtnLink>
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
