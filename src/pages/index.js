import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/homeObj";
import InfoSection from "../components/InfoSection";
import Projects from "../components/Projects";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Projects />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
