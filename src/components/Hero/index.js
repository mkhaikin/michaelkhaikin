import React from "react";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  // VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowContainer,
  ArrowAwrapper,
  Arrow,
} from "./heroElems";
// option for video import Video from "../../video/video.mp4";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <HeroContainer id="Home">
      <HeroBg>
        {/* option for video
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
        <ImageBg />
      </HeroBg>
      <HeroContent id="HeroContent">
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
                .typeString("I <3 Coding")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Let's explore together.")
                .start();
            }}
          />
        </HeroP>
        <ArrowContainer
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <ArrowAwrapper>
            <Arrow />
          </ArrowAwrapper>
        </ArrowContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
