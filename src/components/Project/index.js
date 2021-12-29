import React from "react";
import { useParams } from "react-router-dom";

const Project = ({ items }) => {
  let { userId } = useParams();
  let id = userId - 1;
  return (
    <section className="menu section">
      {/* key={id} */}
      <article className="menu-item">
        {/* <img src={img} alt={title} className="photo" /> */}
        <div className="item-info">
          <header>
            <h4>{items[id].title}</h4>
            {/* <h4 className="price">{price}</h4> */}
          </header>
          {/* <p className="item-text">{desc}</p> */}
        </div>
      </article>
    </section>
  );
};

export default Project;
