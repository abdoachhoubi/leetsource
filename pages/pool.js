import React, { useState, useEffect, createContext } from "react";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib";
import { Header, Main } from "../routes/Pool/containers";

export var PoolContext = createContext();

const Pool = ({ pool }) => {
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
      <div className="home__container">
        <Head>
          <title>Leet Source - 1337 Pool</title>
          <meta
            name="google-site-verification"
            content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
          />
          <meta name="description" content={source.introduction} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header source={source} />
      </div>
      <Main benifits={benifits} link={links} skills={skills} tips={tips} />
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
        links {
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
