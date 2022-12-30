import React, { createContext, useState, useEffect, useRef } from "react";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib";
import { Header, Main, Footer } from "../utils/Home/containers";
import { BgAnimation } from "../utils/Shared/Components";

export var HomeContext = createContext();

export default function Home({ res }) {
  /* ----- Creating Main ref and scroll function ----- */

  const main__ref = useRef();
  const scrollToMain = () => {
    main__ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  /* ------------------------------------------------- */

  /* ------- Destructuring home data from res -------- */

  let pool, about;
  if (res) {
    pool = res?.pool;
    about = res?.about;
  }
  const data = [pool, about];

  /* ------------------------------------------------- */

  /* ------------ Getting viewport width ------------- */

  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);

  /* ------------------------------------------------- */

  return (
    <HomeContext.Provider value={{ width: width, data: data }}>
      <div className="home__container">
        <Head>
          <title>Leet Source</title>
          <meta
            name="google-site-verification"
            content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
          />
          <meta
            name="description"
            content="A list of resources that every programmer need in order to get better in programming"
          />
          <meta
            name="keywords"
            content="1337, Leet, C, 1337 Pool, 42 Cursus, 1337 Ecole, C Programming"
          />

          <meta property="og:url" content="https://source.leet.ma" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Leet Source" />
          <meta
            property="og:description"
            content="A list of resources that every programmer need in order to get better in programming"
          />
          <meta
            property="og:image"
            content="https://media.graphassets.com/1pYBffWYTLyhBxfRWtWw"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="source.leet.ma" />
          <meta property="twitter:url" content="https://source.leet.ma" />
          <meta name="twitter:title" content="Leet Source" />
          <meta
            name="twitter:description"
            content="A list of resources that every programmer need in order to get better in programming"
          />
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
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BgAnimation />
        <div className="home__wrapper">
          <Header scrollToMain={scrollToMain} />
          <Main main__ref={main__ref} />
          <Footer />
        </div>
      </div>
    </HomeContext.Provider>
  );
}

/* ------- Fetching data on initialization -------- */

Home.getInitialProps = async () => {
  // Home Entries Data

  const { data } = await client.query({
    query: gql`
      query Pools {
        pools {
          id
          title
          content
        }
      }
    `,
  });

  // Home About Data

  const { data: about } = await client.query({
    query: gql`
      query Abouts {
        abouts {
          id
          title
          content
        }
      }
    `,
  });

  return { res: { pool: data, about: about } };
};

/* ------------------------------------------------- */
