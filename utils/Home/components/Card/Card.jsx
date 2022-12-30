import React from "react";
import Link from "next/link";

const Card = ({ title, content, link, bottom__margin }) => {
  const rmchr = (str) => {
    return str.slice(0, str.length - 1);
  };
  return (
    <div className="home__card">
      <h2 className={`home__card--title ${bottom__margin}`}>{title}</h2>
      <p className={`home__card--content ${bottom__margin}`}>{content}</p>
      {link && (
        <Link className="home__card--cta" href={link}>
          Discover {rmchr(title)}
        </Link>
      )}
    </div>
  );
};

export default Card;
