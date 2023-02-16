import Head from "next/head";
import { useEffect, useState, createContext } from "react";
import Landing from "../views/desktop/Landing/Landing";
import SLanding from "../views/mobile/Slanding/SLanding";

const HomeContext = createContext();

export default function Home() {
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const resize = (w, h) => {
    setWidth(w);
    setHeight(h);
  };
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    resize(window.innerWidth, window.innerHeight);
  }, [size]);

  return (
    <HomeContext.Provider value={{ width, height }}>
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
      {width == 0 ? <></> : width > 900 ? <Landing /> : <SLanding />}
    </HomeContext.Provider>
  );
}
