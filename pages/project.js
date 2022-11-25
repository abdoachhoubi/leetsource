import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Project = ({ data }) => {
  console.log(data);
  const { project } = useRouter().query;
  return (
    data && (
      <div>
        <h1>{data[0].projects[0].title}</h1>
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
