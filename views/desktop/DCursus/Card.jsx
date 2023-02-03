import React from "react";
import Link from "next/link";

const Card = ({ title, description, query, setProject, setQuery }) => {
  return (
    <div className="card">
      <h2 className="subheading mb-2">{title}</h2>
      <p className="text mb-2">{description}</p>
      <button
        className="button__primary"
        onClick={() => {
          setProject(title);
          setQuery(query);
        }}
      >
        Check resources
      </button>
    </div>
  );
};

export default Card;
