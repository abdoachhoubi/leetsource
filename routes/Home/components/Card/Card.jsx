import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="home__banner__card">
      <h1 className="title">{title}</h1>
      <p className="content">{content}</p>
    </div>
  );
};

export default Card;
