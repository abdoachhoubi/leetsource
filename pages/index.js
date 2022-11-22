import React, { createContext, useState, useEffect } from "react";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib";
import { Header, Main, Footer } from "../routes/Home/containers";

export var HomeContext = createContext();

export default function Home({ res }) {
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
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Main />
        <Footer />
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
