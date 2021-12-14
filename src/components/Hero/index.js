import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  TextWrapper,
  Line,
  HeroH1,
  HeroP,
  ImgWrapper,
} from "./HeroElems";
import Video from "../../video/video.mp4";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <HeroContainer id="Home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <TextWrapper>
          <HeroH1 className="h1">Hello World,</HeroH1>
          <HeroH1>I'm Michael Khaikin</HeroH1>
          <HeroP>
            <Typewriter 
              onInit={(typewriter) => {
                typewriter.typeString("Front-End Developer").start()
              }
            />
          </HeroP>
        </TextWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
