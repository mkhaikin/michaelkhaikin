import React from "react";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/homeObj";

const Home = () => {
  return (
    <>
      <div className="infoSectionsWrapper">
        <div className="SectionsWrapper">
          <Hero />
        </div>

        <div className="SectionsWrapper">
          <InfoSection {...homeObjOne} />
        </div>
        <div className="SectionsWrapper">
          <InfoSection {...homeObjTwo} />
        </div>
        <div className="SectionsWrapper">
          <InfoSection {...homeObjThree} />
        </div>
      </div>
    </>
  );
};

export default Home;
