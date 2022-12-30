import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Nav } from "../utils/Home/components";

const FourohFour = () => {
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
        <title>404 - Not Found</title>
        <meta
          name="google-site-verification"
          content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
        />
        <meta
          name="description"
          content="The page of resource you're looking for seems to be missing!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav width={width} />
        <section className="banner">
          <h1>
            <span>404</span> - Not Found
          </h1>
        </section>
      </header>
    </div>
  );
};

export default FourohFour;
