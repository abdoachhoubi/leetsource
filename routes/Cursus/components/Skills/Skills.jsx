import Link from "next/link";
import React, { useContext, useRef } from "react";
import { CursusContext } from "../../../../contexts";

const Skills = ({ res__ref }) => {
  if (!res__ref) res__ref = useRef();
  console.log(res__ref);
  const { projects } = useContext(CursusContext);
  return (
    <section className="cursus__main__intro" ref={res__ref}>
      <h1 className="cursus__main__heading">Projects</h1>
      <h2 className="lh130">
        After finishing each project, you'll gain new skills!
        <br />
        Click on a project to get a list of the resources related to it.
      </h2>
      <ul className="cursus__main__list grid__3 wide mt4">
        {projects &&
          projects.map((e, i) => {
            return (
              <Link
                href={{
                  pathname: "/project",
                  query: { project: e.pro },
                }}
                key={i}
                className="main__list__item skills__it"
              >
                <h3 className="list__title">{e.title}</h3>
                <p className="list__content">{e.description}</p>
              </Link>
            );
          })}
      </ul>
    </section>
  );
};

export default Skills;
