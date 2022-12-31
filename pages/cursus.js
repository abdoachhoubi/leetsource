import React, { useState, useEffect, useRef, createContext } from "react";
import { Header } from "../utils/Cursus/containers";
import { MainIntro, Skills } from "../utils/Cursus/components";
import { Footer } from "../utils/Home/containers";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib";
import { useSession, signIn } from "next-auth/react";

export var CursusContext = createContext();

const Cursus = ({ cursus }) => {
  const { status } = useSession();
  // Sorting projects
  let projects = [];
  for (let i = 0; i < cursus.projects.length; i++) {
    projects[cursus.projects[i].index] = cursus.projects[i];
  }

  // Destructuring all cursus data
  const { source } = cursus;

  // Getting the page description
  const description = source.introduction.split("$").join(" ");

  // Width States
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);

  // Creating Main ref and scroll function
  const main__ref = useRef();
  const scrollToMain = () => {
    main__ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (status === "unauthenticated") signIn();
  }, [status]);

  // Getting Window Width
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);
  return status === "authenticated" ? (
    <CursusContext.Provider
      value={{ width: width, data: cursus, projects: projects }}
    >
      <div className="cursus__container">
        <Head>
          <title>Leet Source - Cursus</title>
          <meta
            name="google-site-verification"
            content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
          />
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="source leet, leet source, source, leet, source 1337, 1337.ma,  1337, resource, cursus, pool, libft"
          />

          <meta property="og:url" content="https://source.leet.ma/cursus" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Leet Source" />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content="https://media.graphassets.com/tsQKXWcbR1CorfMQlInl"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="source.leet.ma" />
          <meta
            property="twitter:url"
            content="https://source.leet.ma/cursus"
          />
          <meta name="twitter:title" content="Leet Source" />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content="https://media.graphassets.com/tsQKXWcbR1CorfMQlInl"
          />

          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="Astroboy" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <Header scrollToMain={scrollToMain} />
      <main className="cursus__main" ref={main__ref}>
        <Skills />
        <MainIntro n={0} />
        <MainIntro n={1} />
      </main>
      <Footer size="wide" signout="true" />
    </CursusContext.Provider>
  ) : (
    <></>
  );
};

Cursus.getInitialProps = async () => {
  // Pool Data

  const { data } = await client.query({
    query: gql`
      query Cursus {
        source(where: { id: "clar5dqzt0ivd0ausvkco4otk" }) {
          id
          category
          introduction
        }
        intros {
          title
          description
          list
        }
        projects(last: 30) {
          index
          title
          pro
          description
        }
      }
    `,
  });

  return {
    cursus: data,
  };
};

export default Cursus;
