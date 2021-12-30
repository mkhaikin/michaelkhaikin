import React from "react";
import Header from "../Header";
import {
  AboutContainer,
  AboutH1,
  AboutWrapper,
  AboutP,
  SkillsWrapper,
  SkillsH2,
  SkillIconsWrap,
  SkillIcon,
} from "./aboutElems";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaHtml5,
  FaCss3,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import { SiRedux, SiMongodb, SiPostgresql } from "react-icons/si";
const About = () => {
  return (
    <AboutContainer>
      <AboutH1>About Msdse</AboutH1>
      <AboutWrapper>
        <AboutP>
          Hi, my name is Michael Khaikin. I'm an upbeat, energetic person. I
          enjoy solving problems and use web development as an outlet for my
          creativity. I started with making small Html websites and currently
          enjoy creating Front-End and Full-Stack application. I'm always
          exsited to learn something new and meet new people.
        </AboutP>
        <SkillsWrapper>
          <SkillsH2>My Kills</SkillsH2>
          <SkillIconsWrap>
            <SkillIcon>
              <FaReact style={{ color: "#1DA1F2" }} />
              <span>React</span>
            </SkillIcon>
            <SkillIcon>
              <SiRedux style={{ color: "#f208d7" }} />
              <span>Redux</span>
            </SkillIcon>
            <SkillIcon>
              <FaNodeJs style={{ color: "#08f223" }} />
              <span>Node.js</span>
            </SkillIcon>
            <SkillIcon>
              <FaHtml5 style={{ color: "#f22308" }} />
              <span>HTML</span>
            </SkillIcon>
            <SkillIcon>
              <FaCss3 style={{ color: "#0862f2" }} />
              <span>CSS</span>
            </SkillIcon>
            <SkillIcon>
              <FaJs style={{ color: "#f2d308" }} />
              <span>JS</span>
            </SkillIcon>
            <SkillIcon>
              <FaDatabase style={{ color: "#808080" }} />
              <span>SQL</span>
            </SkillIcon>
            <SkillIcon>
              <SiMongodb style={{ color: "#00b300" }} />
              <span>Mongo</span>
            </SkillIcon>
            <SkillIcon>
              <SiPostgresql style={{ color: "#0000b3" }} />
              <span>PostgreSQL</span>
            </SkillIcon>
            <SkillIcon>
              <FaWordpress style={{ color: "#696969" }} />
              <span>WordPress</span>
            </SkillIcon>
          </SkillIconsWrap>
        </SkillsWrapper>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
