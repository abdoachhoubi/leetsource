import React, { useContext } from "react";
import { PoolContext } from "../../../../contexts";
import { Tip, Skill, LinkPreview } from "../../components";

const Main = ({ benifits, links, skills, tips }) => {
  /* ---------------- Viewport Width ----------------- */

  const { width } = useContext(PoolContext);

  /* ------------------------------------------------- */

  /* ----- Filtering the "1337 Pool" Source Data ----- */

  // 1337 Pool - Skills
  skills = skills?.filter((e) => {
    if (e.source.category == "1337 Pool") return e;
  });

  // 1337 Pool - Tips
  tips = tips?.filter((e) => {
    if (e.source.category == "1337 Pool") return e;
  });

  // 1337 Pool - Benifits
  benifits = benifits?.filter((e) => {
    if (e.source.category == "1337 Pool") return e;
  });

  // 1337 Pool - Links
  links = links?.filter((e) => {
    if (e.source.category == "1337 Pool") return e;
  });

  /* ------------------------------------------------- */
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
        <Tip key={e.id} data={e} i={i} width={width} />
      ))}
      <section className="pool__main__links">
        <h1 className="links__heading">List of useful resources</h1>
        <div className="link__grid">
          {links?.map((e, i) => (
            <LinkPreview key={i} data={e} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
