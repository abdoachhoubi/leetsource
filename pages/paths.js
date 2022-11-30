import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Nav } from "../routes/Home/components";

const Paths = () => {
  /* ------------ Getting viewport width ------------- */

  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);

  /* ------------------------------------------------- */
  return (
    <div className="fourohfour__container">
      <Head>
        <title>Leet Source - Paths</title>
        <meta
          name="google-site-verification"
          content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
        />
        <meta name="description" content="Programming paths!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav width={width} />
        <section className="banner">
          <h1>
            Coming <span>Soon</span>
          </h1>
        </section>
      </header>
    </div>
  );
};

export default Paths;
