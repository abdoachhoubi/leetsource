import React, { createContext, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header, Main } from "../routes/Project/containers";
import { Footer } from "../routes/Home/containers";

export const ProjectContext = createContext();

const getTitle = (s, arr) => {
  let i;

  i = 0;
  while (i < arr.length) if (s === arr[i].pro) return arr[i].title;
  return "404";
};

const getDescription = (s, arr) => {
  let i;

  i = 0;
  while (i < arr.length) if (s === arr[i].pro) return arr[i].description;
  return "404";
};

const Project = ({ data, projects }) => {
  // console.log(data);
  // Width States
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);

  const router = useRouter();
  const title = getTitle(router.query.project, projects);
  const description = getDescription(router.query.project, projects);
  // console.log(starrcmp(router.query.project, projects));
  // Getting Window Width
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);
  return (
    <ProjectContext.Provider
      value={{
        width: width,
        data: data,
        title: title,
        description: description,
      }}
    >
      <div className="project__container">
        <Head>
          <title>Leet Source - {title}</title>
          <meta
            name="google-site-verification"
            content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
          />
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="1337 Pool, 42 Cursus, 1337 Ecole, C Programming"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="Astroboy" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Main />
        <Footer size="wide" />
      </div>
    </ProjectContext.Provider>
  );
};

Project.getInitialProps = async (ctx) => {
  const data = await fetch(
    `http://localhost:3000/api/project/?project=${ctx.query.project}`
  ).then((data) => data.json());
  return { data: data.links, projects: data.projects };
};

export default Project;
