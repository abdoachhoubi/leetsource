import React, { useState, useEffect, useRef, createContext } from "react";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib";

export var CursusContext = createContext();

const Cursus = () => {
  // Width States
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);

  // Getting Window Width
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);
  return (
    <CursusContext.Provider value={{ width: width }}>
      <div className="cursus__container">Cursus</div>
    </CursusContext.Provider>
  );
};

export default Cursus;

/*

import React, { useState, useEffect, useRef, createContext } from "react";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib";
import { Header, Main } from "../routes/Pool/containers";
import { Footer } from "../routes/Home/containers";

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
        <Header source={source} scrollToMain={scrollToMain} />

*/
