import React, { useState } from "react";
// import {
//   AboutContainer,
//   AboutH1,
//   AboutWrapper,
//   AboutP,
//   SkillsWrapper,
//   SkillsH2,
//   SkillIconsWrap,
//   SkillIcon,
// } from "./aboutElems";
// import {
//   FaReact,
//   FaNodeJs,
//   FaWordpress,
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaDatabase,
// } from "react-icons/fa";
// import { SiRedux, SiMongodb, SiPostgresql } from "react-icons/si";
import aboutData from "./aboutData";

console.log(aboutData);

const About = () => {
  const [tabs, setTabs] = useState(aboutData);
  const [value, setValue] = useState(0);

  const { title, category, gitHub, desc } = tabs[value];

  const myTabs = tabs;
  return (
    <section className="section">
      <div className="job-center">
        {/* btn container */}
        <div className="btn-container">
          {console.log(myTabs)}
          {myTabs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        {/* job ingo  */}
        <artice className="job-info">
          <h3>{title}</h3>
          <h3>{category}</h3>
          <p className="job-date">{gitHub}</p>
          {desc.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <p>{item}</p>
              </div>
            );
          })}
        </artice>
      </div>
    </section>

    // <AboutContainer>
    //   <AboutH1>About Msdse</AboutH1>
    //   <AboutWrapper>
    //     <AboutP>
    //       Hi, my name is Michael Khaikin. I'm a self taught web deveoper from
    //       Toronto. I enjoy solving problems but i tend to focus on solutions. I
    //       started with making small Html websites and currently enjoy creating
    //       Front-End and Full-Stack application. I'm always exsited to learn
    //       something new and meet new people.
    //     </AboutP>
    //     <SkillsWrapper>
    //       <SkillsH2>My Kills</SkillsH2>
    //       <SkillIconsWrap>
    //         <SkillIcon>
    //           <FaReact style={{ color: "#1DA1F2" }} />
    //           <span>React</span>
    //         </SkillIcon>
    //         <SkillIcon>
    //           <SiRedux style={{ color: "#f208d7" }} />
    //           <span>Redux</span>
    //         </SkillIcon>
    //         <SkillIcon>
    //           <FaNodeJs style={{ color: "#08f223" }} />
    //           <span>Node.js</span>
    //         </SkillIcon>
    //         <SkillIcon>
    //           <FaHtml5 style={{ color: "#f22308" }} />
    //           <span>HTML</span>
    //         </SkillIcon>
    //         <SkillIcon>
    //           <FaCss3 style={{ color: "#0862f2" }} />
    //           <span>CSS</span>
    //         </SkillIcon>
    //         <SkillIcon>
    //           <FaJs style={{ color: "#f2d308" }} />
    //           <span>JS</span>
    //         </SkillIcon>
    //         <SkillIcon>
    //           <FaDatabase style={{ color: "#808080" }} />
    //           <span>SQL</span>
    //         </SkillIcon>
    //         <SkillIcon>
    //           <SiMongodb style={{ color: "#00b300" }} />
    //           <span>Mongo</span>
    //         </SkillIcon>
    //         <SkillIcon>
    //           <SiPostgresql style={{ color: "#0000b3" }} />
    //           <span>PostgreSQL</span>
    //         </SkillIcon>
    //         <SkillIcon>
    //           <FaWordpress style={{ color: "#696969" }} />
    //           <span>WordPress</span>
    //         </SkillIcon>
    //       </SkillIconsWrap>
    //     </SkillsWrapper>
    //   </AboutWrapper>
    // </AboutContainer>
  );
};

export default About;
