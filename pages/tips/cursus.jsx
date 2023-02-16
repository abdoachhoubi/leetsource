import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import pattern__res from "../../public/pattern.svg";
import ct_banner from "../../public/ct_banner.png";
import Nav from "../../views/mobile/Slanding/Components/Nav";

const { src: pattern } = pattern__res;

const bg__pattern = {
  backgroundImage: `url(${pattern})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const FooterMobile = () => {
  return (
    <footer className="s-home__footer">
      <p className="s-subheading mb-1">
        <span className="primary">*</span>LeetSource
      </p>
      <section className="nav mt-4 mb-4">
        <Link className="s-text light" href="/">
          Home
        </Link>
        <Link className="s-text light" href="/">
          Terms and Conditions
        </Link>
        <Link className="s-text light" href="/">
          About
        </Link>
        <Link className="s-text light" href="/">
          Privacy Policy
        </Link>
        <Link className="s-text light" href="/">
          Blog
        </Link>
        <Link className="s-text light" href="/">
          Cookie Policy
        </Link>
      </section>
      <p className="s-text t-center">
        &copy; 2023 LeetSource, All rights reserved.
      </p>
    </footer>
  );
};

export const FooterDesktop = () => {
  return (
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
        <Link className="text light" href="/">
          Terms and Conditions
        </Link>
        <Link className="text light" href="/">
          About
        </Link>
        <Link className="text light" href="/">
          Privacy Policy
        </Link>
        <Link className="text light" href="/">
          Blog
        </Link>
        <Link className="text light" href="/">
          Cookie Policy
        </Link>
      </section>
    </footer>
  );
};

export const NavDesktop = () => {
  return (
    <nav className="navigation">
      <h1 className="subheading">
        <Link href="/">
          <span className="primary">*</span>LeetSource
        </Link>
      </h1>
      <ul className="nav__list">
        <li className="text nav__list__item">
          <Link href="/" className="nav__list__link">
            Home
          </Link>
        </li>
        <li className="text nav__list__item">
          <Link href="/pool" className="nav__list__link">
            Pool
          </Link>
        </li>
        <li className="text nav__list__item">
          <Link href="/cursus" className="nav__list__link">
            Cursus
          </Link>
        </li>
        <li className="text nav__list__item">
          <Link href="/paths" className="nav__list__link">
            Paths
          </Link>
        </li>
        <li className="text nav__list__item">
          <Link href="/resources" className="nav__list__link">
            Resources
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Cursus = () => {
  const [height, setHeight] = useState(0);
  const [win, setWin] = useState(0);
  const [variant, setVariant] = useState();
  const image = useRef();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setVariant(window.innerWidth);
      setHeight(image.current.clientHeight);
      setWin(window.innerWidth);
    });
    setWin(window.innerWidth);
    setHeight(image.current.clientHeight);
  }, [variant]);

  return (
    <>
      <Head>
        <title>Leet Source - Cursus Tips</title>
        <meta
          name="google-site-verification"
          content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
        />
        <meta name="description" content="1337 Cursus Tips and Info" />
        <meta
          name="keywords"
          content="source leet, leet source, source, leet, source 1337, 1337.ma,  1337, resource, cursus, pool, libft"
        />

        <meta property="og:url" content="https://source.leet.ma/cursus" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Leet Source" />
        <meta property="og:description" content="1337 Cursus Tips and Info" />
        <meta
          property="og:image"
          content="https://media.graphassets.com/YPq8cdnARUac586rauOS"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="source.leet.ma" />
        <meta property="twitter:url" content="https://source.leet.ma/cursus" />
        <meta name="twitter:title" content="Leet Source" />
        <meta name="twitter:description" content="1337 Cursus Tips and Info" />
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
      <header className="tips__header">
        {win > 900 ? <NavDesktop /> : <Nav />}
        <div className="header__banner text-dark">
          <div className="banner__pattern" style={bg__pattern}>
            <p className="subheading mb-2">Cursus Tips</p>

            <h1 className="heading">
              To ensure an exceptional experience at 1337, consider adhering to
              the following guidelines
            </h1>
          </div>
        </div>
        <div
          className="image__container"
          style={{ height: `calc(${height}px - 8vh + 4rem)` }}
        >
          <Image
            priority={true}
            ref={image}
            src={ct_banner}
            className="ct_banner"
            alt="Illustration"
          />
        </div>
      </header>
      <main className="tips__main">
        <section className="description">
          <h2 className="heading mb-2 mt-2 primary">Congratulations</h2>
          <p className="text mb-4">
            Congratulations on successfully passing the pool and welcome to 1337
            as a new student!
            <br />
            The upcoming three to five years will undoubtedly be some of the
            most rewarding and enriching experiences of your life.
            <br />
            <br />
            <br />
            As a new student, there are a few important things that you should
            keep in mind.
            <br />
            <br />
            Firstly, there is no distinction between new and old students at
            1337.
            <br />
            You are encouraged to seek help from anyone and likewise, to offer
            your assistance to others.
            <br />
            <br />
            1337 expects all of its students to embody the values of humility,
            respect, and honesty.
            <br />
            These virtues are essential for building a positive and
            collaborative learning environment.
            <br />
            <br />
            It&apos;s worth noting that the same pool rules still apply at 1337.
            <br />
            This means that you should continue to embrace the challenge of
            pushing yourself beyond your limits and into uncharted territory.
            <br />
            <br />
            Finally, as you progress through your projects, you will undoubtedly
            gain a wealth of knowledge and experience.
            <br />
            Every milestone is a chance to explore new concepts and to further
            develop your skills.
            <br />
            <br />
            Congratulations on embarking on this exciting new journey, and we
            wish you all the best for your future endeavours.
          </p>
          <h2 className="heading mb-2 mt-6 primary">Blackhole?</h2>
          <p className="text">
            Failure to effectively manage your time can result in being consumed
            by the blackhole.
            <br />
            This metaphorical deadline should be taken seriously, as once it has
            consumed you, there may be no returning.
            <br />
            <br />
            Initially, you will have approximately 70 days until the
            blackhole&apos;s deadline, but this can be extended through project
            validation.
            <br />
            <br />
            As young adults, you hold full responsibility for your actions.
          </p>
        </section>
      </main>
      <div className="tips__footer">
        {win > 900 ? <FooterDesktop /> : <FooterMobile />}
      </div>
    </>
  );
};

export default Cursus;
