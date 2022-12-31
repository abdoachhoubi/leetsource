import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Footer } from "../../utils/Home/containers";
import { Nav } from "../../utils/Home/components";
import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
} from "next-auth/react";

const Signin = ({ providers }) => {
  const provider = providers["42-school"];

  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);
  return (
    <div className="auth__container">
      <Head>
        <title>Leet Source - Sign In</title>
        <meta
          name="google-site-verification"
          content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
        />
        <meta
          name="description"
          content="sign in to Leetsource with 42 school intranet"
        />
        <meta
          name="keywords"
          content="source leet, leet source, source, leet, source 1337, 1337.ma,  1337, resource, cursus, pool, libft"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Astroboy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="auth__header">
        <Nav width={width} auth={true} />
        <button className="auth__button" onClick={() => signIn(provider.id)}>
          Sign in with {provider.name}
        </button>
      </header>
      <Footer size="wide" />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders(context);

  return {
    props: {
      providers,
      csrfToken,
    },
  };
}

export default Signin;
