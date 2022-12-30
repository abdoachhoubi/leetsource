import React, { createContext, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Router from "next/router";
import { Header, Main } from "../utils/Project/containers";
import { Footer } from "../utils/Home/containers";
import { useSession, signIn } from "next-auth/react";

export const ProjectContext = createContext();

const Project = () => {
  const { status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") signIn();
  }, [status]);

  const router = useRouter();
  const [cont, setCont] = useState({});
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getMeta = (meta, s, arr) => {
    let i;

    i = -1;
    if (meta == "title") {
      while (++i < arr?.length) if (s === arr[i].pro) return arr[i].title;
    } else {
      while (++i < arr?.length) if (s === arr[i].pro) return arr[i].description;
    }
    return "404";
  };

  useEffect(() => {
    console.log(router);
    if (router?.asPath === "/project") {
      Router.push({
        pathname: "/",
      });
    }
    if (router?.query?.project) {
      fetch(`/api/project/?project=${router?.query?.project}`)
        .then((data) => data.json())
        .then((data) => setCont(data))
        .catch((e) => console.log(e));
    }
  }, [router?.query?.project]);

  const projects = cont?.projects;
  const data = cont?.links;

  useEffect(() => {
    if (projects) {
      setTitle(
        "Leet Source - " + getMeta("title", router.query.project, projects)
      );
      setDescription(getMeta("description", router.query.project, projects));
      if (title === "404") router.push({ pathname: "/404" });
    }
  }, [projects]);

  // Getting Window Width
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);

  return status === "authenticated" && data && projects ? (
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
          <title>{title}</title>
          <meta
            name="google-site-verification"
            content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
          />
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="1337 Pool, 42 Cursus, 1337 Ecole, C Programming"
          />

          <meta property="og:url" content="https://source.leet.ma" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Leet Source" />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content="https://media.graphassets.com/1pYBffWYTLyhBxfRWtWw"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="source.leet.ma" />
          <meta property="twitter:url" content="https://source.leet.ma" />
          <meta name="twitter:title" content="Leet Source" />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content="https://media.graphassets.com/1pYBffWYTLyhBxfRWtWw"
          />

          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="Astroboy" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="conatinerX">
          <Header />
          <Main />
        </div>
        <Footer size="wide" signout={true} />
      </div>
    </ProjectContext.Provider>
  ) : (
    <></>
  );
};

export default Project;
