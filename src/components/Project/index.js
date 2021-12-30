import React from "react";
import { useParams } from "react-router-dom";
import { InfoContainer } from "./projectElems";

const Project = ({ items }) => {
  let { userId } = useParams();
  let id = userId - 1;
  return (
    <section className="section">
      <article className="menu-item">
        <img src={items[id].img} alt={items[id].title} className="photo" />
        <div className="item-info">
          <header>
            <h4>{items[id].title}</h4>
            <h4>{items[id].gitHub}</h4>
          </header>
          <p className="item-text">{items[id].desc}</p>
        </div>
      </article>
    </section>
  );
};

export default Project;
