import React from "react";
import Link from "next/link";

const ResCard = ({ name, description, link, owner }) => {
  return (
    <article className="resource__card mb-3">
      <h2 className="subheading mb-2">{name}</h2>
      <p className="text mb-2">{description}</p>
      {owner && (
        <p className="text mb-2">
          Added by:{" "}
          <span className="primary">
            <Link
              target="_blank"
              rel="noreferrer"
              href={`https://profile.intra.42.fr/users/${owner}`}
            >
              {owner}
            </Link>
          </span>
        </p>
      )}
      <Link
        className="button__primary mb-0"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        Visit Resource
      </Link>
    </article>
  );
};

export default ResCard;
