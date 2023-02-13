import React from "react";
import Link from "next/link";
import Head from "next/head";

const FourOhFour = () => {
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
        <h1 className="fourohfour__title subheading">
          <Link href="/">
            <span className="primary">*</span>LeetSource
          </Link>
        </h1>
        <nav className="navbar">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="text" href="/">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link className="text" href="/pool">
                Pool
              </Link>
            </li>
            <li className="nav__item">
              <Link className="text" href="/cursus">
                Cursus
              </Link>
            </li>
            <li className="nav__item">
              <Link className="text" href="/paths">
                Paths
              </Link>
            </li>
            <li className="nav__item">
              <Link className="text" href="/resources">
                Resources
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="fourohfour__main">
        <h1 className="heading primary">404 - Not Found</h1>
        <h2 className="subheading">
          The page or resource you are looking for doesn't seem to exist!
        </h2>
        <Link className="button__primary eclipse" href="/">
          Home
        </Link>
      </main>
      <footer className="home__footer">
        <section className="copyright__line">
          <p className="subheading mb-1">
            <span className="primary">*</span>LeetSource
          </p>
          <p className="copyright text fw-300">
            &copy; 2023 LeetSource, All rights reserved.
          </p>
        </section>
        <section className="nav">
          <Link className="text light" href="/">
            Home
          </Link>
          <Link className="text light" href="/terms">
            Terms and Conditions
          </Link>
          <Link className="text light" href="/about">
            About
          </Link>
          <Link className="text light" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text light" href="/blog">
            Blog
          </Link>
          <Link className="text light" href="/cookie">
            Cookie Policy
          </Link>
        </section>
      </footer>
    </>
  );
};

export default FourOhFour;
