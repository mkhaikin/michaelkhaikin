import React, { useState } from "react";
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
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Projects items={menuItems} />
      </section>
    </main>
  );
};

// const ProjectsContainer = styled.div`
//   height: 800px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: #f9f9f9;

//   @media screen and (max-width: 768px) {
//     height: 1100px;
//   }

//   @media screen and (max-width: 480px) {
//     height: 1300px;
//   }
// `;
// export const ProjectsWrapper = styled.div`
//   max-width: 1300px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   align-items: center;
//   grid-gap: 16px;
//   padding: 0 50px;

//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//     padding: 0 20px;
//   }
// `;

export default ProjectsPage;
