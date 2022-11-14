import React from "react";
import Link from "next/link";

const Card = ({ title, content, link }) => {
  return (
    <div className="home__banner__card__container">
      <Link className="home__banner__card" href={link}>
        <h3 className="title">{title}</h3>
        <p className="content">{content}</p>
      </Link>
    </div>
  );
};

export default Card;
