import React, { useState, useEffect, useRef, createContext } from "react";
import { Header } from "../routes/Cursus/containers";
import { MainIntro, Skills } from "../routes/Cursus/components";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib";

export var CursusContext = createContext();

const Cursus = ({ cursus }) => {
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

  // Getting Window Width
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);
  return (
    <CursusContext.Provider value={{ width: width, data: cursus }}>
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
            content="1337 Pool, 42 Cursus, 1337 Ecole, C Programming"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="Astroboy" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <Header scrollToMain={scrollToMain} />
      <main className="cursus__main" ref={main__ref}>
        <MainIntro n={0} />
        <MainIntro n={1} />
        <Skills />
      </main>
    </CursusContext.Provider>
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
        projects {
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
