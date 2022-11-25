import React from "react";
import axios from "axios";

const Project = ({ data }) => {
  return (
    data && (
      <div>
        <h1>Okeh {data[0]?.title}</h1>
      </div>
    )
  );
};

Project.getInitialProps = async (ctx) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/project/?project=${ctx.query.project}`
  );
  return { data: data };
};

export default Project;
