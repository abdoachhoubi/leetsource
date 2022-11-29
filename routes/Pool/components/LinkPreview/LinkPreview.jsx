import React from "react";
import Link from "next/link";

const LinkPreview = ({ data, author }) => {
  return (
    data && (
      <article className="link__preview">
        <div className="meta">
          <h2 className="title">{data.title}</h2>
          <p className="description">{data.description}</p>
        </div>
        <div className="cta">
          {author && (
            <ul className="attribution">
              <li>
                Suggested by{" "}
                <Link href={`https://profile.intra.42.fr/users/${author}`}>
                  {author}
                </Link>
              </li>
            </ul>
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
