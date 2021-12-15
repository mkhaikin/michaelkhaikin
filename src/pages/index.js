import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { homeObjOne } from "../components/InfoSection/homeObj";
// import InfoSection from "../components/InfoSection";

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
      {/* <InfoSection {...homeObjOne} /> */}
    </>
  );
};

export default Home;