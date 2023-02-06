import React from "react";

const Card = ({
  title,
  description,
  query,
  setProject,
  setQuery,
  scrollTop,
}) => {
  return (
    <div className="card">
      <h2 className="subheading mb-2">{title}</h2>
      <p className="text mb-2">{description}</p>
      <button
        className="button__primary"
        onClick={() => {
          setProject(title);
          setQuery(query);
          scrollTop();
        }}
      >
        Check resources
      </button>
    </div>
  );
};

export default Card;
