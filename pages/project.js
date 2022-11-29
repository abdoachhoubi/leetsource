import React, { createContext, useState, useEffect } from "react";
import Head from "next/head";
import { API__ENDPOINT } from "../data";
import { useRouter } from "next/router";
import { Header, Main } from "../routes/Project/containers";
import { Footer } from "../routes/Home/containers";

export const ProjectContext = createContext();

const Project = ({ data, projects }) => {
  console.log(data);
  if (data) {
    const router = useRouter();

    const getMeta = (meta, s, arr) => {
      let i;

      i = -1;
      if (meta == "title") {
        while (++i < arr.length) if (s === arr[i].pro) return arr[i].title;
      } else {
        while (++i < arr.length)
          if (s === arr[i].pro) return arr[i].description;
      }
      return "404";
    };

    // Width States
    const [size, setSize] = useState(0);
    const [width, setWidth] = useState(0);
    const title = getMeta("title", router.query.project, projects);
    const description = getMeta("description", router.query.project, projects);

    // Getting Window Width
    useEffect(() => {
      if (title == "404") router.push("/404");
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
            <meta
              http-equiv="Content-Type"
              content="text/html; charset=utf-8"
            />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="author" content="Astroboy" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="conatinerX">
            <Header />
            <Main />
          </div>
          <Footer size="wide" />
        </div>
      </ProjectContext.Provider>
    );
  } else {
    return <></>;
  }
};

Project.getInitialProps = async (ctx) => {
  const data = await fetch(
    `${API__ENDPOINT}/api/project/?project=${ctx.query.project}`
  )
    .then((data) => data.json())
    .catch((e) => console.log(e));
  return { data: data?.links, projects: data?.projects };
};

export default Project;
