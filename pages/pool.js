import React, { useState, useEffect, createContext } from "react";
import Head from "next/head";
import SPool from "../views/mobile/SPool/SPool";
import DPool from "../views/desktop/DPool/DPool";
import axios from "axios";

export const PoolContext = createContext();
let info = {
  description:
    "The 'Pool' bootcamp is a comprehensive, four-week program that aims to provide a comprehensive introduction to the fundamental concepts of programming. The program is designed to cater to individuals with no prior experience in the field.",
};

const Pool = () => {
  // Getting the size of the viewport
  const [height, setHeight] = useState(0);
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const resize = (w, h) => {
    setWidth(w);
    setHeight(h);
  };

  // Getting the data from the server
  const [data, setData] = useState("");
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    resize(window.innerWidth, window.innerHeight);
  }, [size]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER__URL}/pool`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .then((error) => {
        setData(error);
      });
  }, []);

  return (
    <PoolContext.Provider value={{ data }}>
      <div className="pool__wrapper">
        <Head>
          <title>Leet Source - Pool</title>
          <meta
            name="google-site-verification"
            content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
          />
          <meta name="description" content={info.description} />
          <meta
            name="keywords"
            content="source leet, leet source, source, leet, source 1337, 1337.ma,  1337, resource, cursus, pool, libft"
          />

          <meta property="og:url" content="https://source.leet.ma/pool" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Leet Source" />
          <meta property="og:description" content={info.description} />
          <meta
            property="og:image"
            content="https://media.graphassets.com/YPq8cdnARUac586rauOS"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="source.leet.ma" />
          <meta property="twitter:url" content="https://source.leet.ma/pool" />
          <meta name="twitter:title" content="Leet Source" />
          <meta name="twitter:description" content={info.description} />
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
        {width == 0 ? <></> : width > 900 ? <DPool /> : <SPool />}
      </div>
    </PoolContext.Provider>
  );
};

export default Pool;
