import React from "react";
import img from "../../../../public/team.svg";

const Tip = ({ data, i, width }) => {
  let cname = "rowrev";
  if (width > 900) {
    if (i % 2) cname = "row";
  } else {
    cname = "column__rev";
  }
  let { src } = img;
  if (data?.illustration) src = data.illustration.url;
  return (
    <section className={`pool__tip ${cname}`}>
      <article className="tip__meta">
        <h1 className="tip__heading">{data.title}</h1>
        <h3 className="tip__description">{data.description}</h3>
        <ul className="tip__list">
          {data.list.split("$").map((e, i) => (
            <li key={i} className="tip__list__item">
              {e}
            </li>
          ))}
        </ul>
      </article>
      <article className="tip__illustration">
        <div
          className="illustration"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </article>
    </section>
  );
};

export default Tip;
