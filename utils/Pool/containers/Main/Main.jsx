import React, { useContext } from "react";
import { PoolContext } from "../../../../contexts";
import { Tip, Skill, LinkPreview } from "../../components";

const Main = ({ benifits, links, skills, tips, main__ref }) => {
  /* ---------------- Viewport Width ----------------- */

  let width;
  const pool__context = useContext(PoolContext);
  if (pool__context) width = pool__context.width;

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
    tips &&
    links && (
      <main className="pool__main" ref={main__ref}>
        <section className="pool__main__links">
          <h1 className="links__heading">List of useful resources</h1>
          <div className="link__grid">
            {links?.map((e, i) => (
              <LinkPreview key={i} data={e} />
            ))}
          </div>
        </section>
        <section className="pool__main__skills">
          <h1 className="pool__main__heading card__heading">
            Skills developed at 1337 Pool
          </h1>
          <div data-testid="skill__cards" className="skill__cards">
            {skills.map((e) => (
              <Skill key={e.id} data={e} />
            ))}
          </div>
        </section>
        {tips.map((e, i) => (
          <Tip key={e.id} data={e} i={i} width={width} />
        ))}
      </main>
    )
  );
};

export default Main;
