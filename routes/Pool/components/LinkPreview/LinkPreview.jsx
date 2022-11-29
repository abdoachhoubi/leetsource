import React from "react";
import Link from "next/link";

const LinkPreview = ({ data, author }) => {
  return (
    data && (
      <article className="link__preview">
        <div className="link__meta">
          <h2 className="title">{data.title}</h2>
          <p className="description">{data.description}</p>
        </div>
        <div className="cta">
          {author && (
            <p className="attribution">
              Suggested by{" "}
              <Link href={`https://profile.intra.42.fr/users/${author}`}>
                {author}
              </Link>
            </p>
          )}

          <Link
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Visit {data.title}
          </Link>
        </div>
      </article>
    )
  );
};

export default LinkPreview;
