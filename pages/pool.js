import React, { useState, useEffect, useRef, createContext } from "react";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib";
import { Header, Main } from "../utils/Pool/containers";
import { Footer } from "../utils/Home/containers";

export var PoolContext = createContext();

const Pool = ({ pool }) => {
  const main__ref = useRef();

  const scrollToMain = () => {
    main__ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Destructuring data from pool
  const { benifits, links, skills, source, tips } = pool;

  // Width States
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);

  // Getting Window Width
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);

  return (
    <PoolContext.Provider value={{ width: width }}>
      <div className="pool__container">
        <Head>
          <title>Leet Source - Pool</title>
          <meta
            name="google-site-verification"
            content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
          />
          <meta name="description" content={source.introduction} />
          <meta
            name="keywords"
            content="source leet, leet source, source, leet, source 1337, 1337.ma,  1337, resource, cursus, pool, libft"
          />

          <meta property="og:url" content="https://source.leet.ma/pool" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Leet Source" />
          <meta property="og:description" content={source.introduction} />
          <meta
            property="og:image"
            content="https://media.graphassets.com/YPq8cdnARUac586rauOS"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="source.leet.ma" />
          <meta property="twitter:url" content="https://source.leet.ma/pool" />
          <meta name="twitter:title" content="Leet Source" />
          <meta name="twitter:description" content={source.introduction} />
          <meta
            name="twitter:image"
            content="https://media.graphassets.com/YPq8cdnARUac586rauOS"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="Astroboy" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header source={source} scrollToMain={scrollToMain} />
      </div>
      <Main
        benifits={benifits}
        links={links}
        skills={skills}
        tips={tips}
        main__ref={main__ref}
      />
      <Footer size="wide" />
    </PoolContext.Provider>
  );
};

/* ------- Fetching data on initialization -------- */

Pool.getInitialProps = async () => {
  // Pool Data

  const { data } = await client.query({
    query: gql`
      query Pool {
        source(where: { id: "clajp731326ot0autusb38vbs" }) {
          id
          category
          introduction
        }
        tips {
          id
          title
          list
          description
          illustration {
            id
            url
          }
          source {
            id
            category
          }
        }
        skills {
          id
          title
          description
          source {
            id
            category
          }
        }
        benifits {
          id
          title
          list
          source {
            id
            category
          }
        }
        links(last: 30) {
          id
          title
          description
          link
          source {
            id
            category
          }
        }
      }
    `,
  });

  return {
    pool: data,
  };
};

/* ------------------------------------------------- */

export default Pool;
