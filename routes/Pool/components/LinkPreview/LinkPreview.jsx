import React from "react";
import Link from "next/link";

const LinkPreview = ({ data }) => {
  return (
    data && (
      <article className="link__preview">
        <div className="link__meta">
          <h2 className="title">{data.title}</h2>
          <p className="description">{data.description}</p>
        </div>
        <Link
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Visit {data.title}
        </Link>
      </article>
    )
  );
};

export default LinkPreview;
