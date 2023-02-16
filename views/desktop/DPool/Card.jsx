import React from "react";
import Link from "next/link";

const Card = ({ name, description, link, user }) => {
  return (
    <article className="resource__card mb-3">
      <h2 className="subheading mb-2">{name}</h2>
      <p className="text mb-2">{description}</p>
      {user && (
        <p className="text mb-2">
          Added by:{" "}
          <span className="primary">
            <Link href={`https://profile.intra.42.fr/${user}`}>{user}</Link>
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

export default Card;
