import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { FooterDesktop, FooterMobile, NavDesktop } from "./tips/cursus";
import Nav from "../views/mobile/Slanding/Components/Nav";

const fourohfour__mobile = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50vh",
  marginTop: "10vh",
  width: "100vw",
  padding: "0 1rem",
};

const fourohfour__desktop = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50vh",
  marginTop: "10vh",
  width: "100vw",
  padding: "0 10vw",
};

const FourOhFour = () => {
  const [win, setWin] = useState(0);
  const [variant, setVariant] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setVariant(window.innerWidth);
      setWin(window.innerWidth);
    });
    setWin(window.innerWidth);
  }, [variant]);
  return (
    <>
      <Head>
        <title>Not Found</title>
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
          content="1337, Leet, C, source leet, leet source, source, leet, source 1337, 1337.ma,  1337, resource, cursus, pool, libft"
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
      <header className="fourohfour__header">
        {win > 900 ? <NavDesktop /> : <Nav />}
      </header>
      <main
        className="fourohfour__main"
        style={win > 900 ? fourohfour__desktop : fourohfour__mobile}
      >
        <h1 className="heading primary mb-2 t-center">404 - Not Found</h1>
        <h2 className="subheading mb-4 t-center">
          The page or resource you are looking for doesn't seem to exist!
        </h2>
        <Link className="button__primary eclipse" href="/">
          Home
        </Link>
      </main>
      {win > 900 ? <FooterDesktop /> : <FooterMobile />}
    </>
  );
};

export default FourOhFour;
