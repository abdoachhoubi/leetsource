import React, { createContext, useState, useEffect } from "react";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib";
import { Header, Main, Footer } from "../routes/Home/containers";

export var HomeContext = createContext();

export default function Home({ pool, about }) {
  const data = [pool, about];
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);

  return (
    <HomeContext.Provider value={{ width: width, data: data }}>
      <div className="home__container">
        <Head>
          <title>Leet Source</title>
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

export async function getStaticProps() {
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

  return {
    props: {
      pool: data,
      about: about,
    },
  };
}
