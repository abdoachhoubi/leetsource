import React from "react";

const Skill = ({ data }) => {
  console.log(data);
  return (
    <article className="skill__card">
      <h3 className="skill__heading">{data.title}</h3>
      <ul className="skill__list">
        {data.description.split("$").map((e, i) => (
          <li className="skill__list__item" key={i}>
            {e}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Skill;
