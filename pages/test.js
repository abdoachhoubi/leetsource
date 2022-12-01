import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Test = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div>
        <Head>
          <title>Leet Source - Cursus</title>
          <meta
            name="google-site-verification"
            content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
          />
          <meta name="description" content="tests page" />
          <meta
            name="keywords"
            content="1337 Pool, 42 Cursus, 1337 Ecole, C Programming"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="Astroboy" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>Signed in user token {session.user.token}</p>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Leet Source - Cursus</title>
        <meta
          name="google-site-verification"
          content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
        />
        <meta name="description" content="tests" />
        <meta
          name="keywords"
          content="1337 Pool, 42 Cursus, 1337 Ecole, C Programming"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Astroboy" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/api/auth/signin">Sign in</Link>
    </div>
  );
};

export default Test;
