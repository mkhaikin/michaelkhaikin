import React, { useState } from "react";

const Categories = ({ categories, filterItems }) => {
  const [activeKey, SetActiveKey] = useState(0);

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`filter-btn ${index === activeKey && "active-btn"}`}
            key={index}
            onClick={() => {
              filterItems(category);
              SetActiveKey(index);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

// const button = styled.button`
//   &:active {
//     background: var(--clr-gold);
//     color: var(--clr-white);
//   }
// `;

export default Categories;
