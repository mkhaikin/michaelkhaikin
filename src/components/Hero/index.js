import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowAwrapper,
  Arrow,
  HeroBtnWrapper,
} from "./heroElems";
import Video from "../../video/video.mp4";
import Typewriter from "typewriter-effect";
import { Button } from "../ButtonElems";

const Hero = () => {
  return (
    <HeroContainer id="Home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1 className="h1">Hello World,</HeroH1>
        <HeroH1>I'm Michael Khaikin</HeroH1>
        <HeroP>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Front-End Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Full-Stack Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("I ❤️ Coding")
                .start();
            }}
          />
        </HeroP>
        <HeroBtnWrapper>
          <Button to="About" primary="true" dark="true" padding="big">
            About Me
          </Button>
          {/* insert social media icons here */}
        </HeroBtnWrapper>
        <ArrowAwrapper>
          <Arrow />
        </ArrowAwrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
