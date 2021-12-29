import React from "react";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/homeObj";

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      <Hero />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
