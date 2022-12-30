import React, { useContext } from "react";
import { CursusContext } from "../../../../contexts";

const MainIntro = ({ n }) => {
  const { data } = useContext(CursusContext);
  const { title, description, list } = data.intros[n];
  return (
    <section className="cursus__main__intro">
      <h1 className="cursus__main__heading">{title}</h1>
      <article className={`cursus__intro__content ${n == 2 && "col wide"}`}>
        <p className={`main__text ${n == 1 && "wide smallx"}`}>
          {description.split("$").map((e, i) => {
            return (
              <span key={i}>
                {e}
                <br />
              </span>
            );
          })}
        </p>
        {list && list != "null" && (
          <ul className={`cursus__main__list ${n == 2 && "grid__3 wide"}`}>
            {n == 0 && (
              <p className="main__text wide">
                Now, as a new student there are few things that you should know:
              </p>
            )}
            {list.split("$").map((e, i) => (
              <li key={i} className="main__list__item">
                {e}
              </li>
            ))}
          </ul>
        )}
      </article>
    </section>
  );
};

export default MainIntro;
