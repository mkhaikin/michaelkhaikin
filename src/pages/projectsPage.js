import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Categories from "../components/Categories";
import projects from "../components/data";

const allCategories = [
  "all",
  ...new Set(projects.map((item) => item.category)),
];

const ProjectsPage = () => {
  const [menuItems, SetMenuItems] = useState(projects);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      SetMenuItems(projects);
      return;
    }
    const newItems = projects.filter((item) => item.category === category);
    SetMenuItems(newItems);
  };

  return (
    <Container>
      <Header title={"Projects"} />
      <main>
        <section className="menu section">
          <Categories categories={categories} filterItems={filterItems} />
          <Projects items={menuItems} />
        </section>
      </main>
    </Container>
  );
};

const Container = styled.div`
  /* background: #efefef; */
  padding: 200px 30px;
  /* display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100vh;
  position: relative;
  z-index: 1;
  min-height: 700px; */
`;

export default ProjectsPage;
