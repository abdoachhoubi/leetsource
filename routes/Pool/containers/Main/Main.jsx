import React from "react";
import { Tip, Skill } from "../../components";

const Main = ({ benifits, links, skills, tips }) => {
  return (
    <main className="pool__main">
      <section className="pool__main__skills">
        <h1 className="pool__main__heading card__heading">
          Skills developed at 1337 Pool
        </h1>
        <div className="skill__cards">
          {skills.map((e, i) => (
            <Skill key={e.id} data={e} />
          ))}
        </div>
      </section>
      {tips.map((e, i) => (
        <Tip key={e.id} data={e} i={i} />
      ))}
    </main>
  );
};

export default Main;
