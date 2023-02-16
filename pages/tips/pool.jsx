import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import pattern__res from "../../public/pattern.svg";
import pt_banner from "../../public/pt_banner.png";
import { NavDesktop, FooterDesktop, FooterMobile } from "./cursus";
import Nav from "../../views/mobile/Slanding/Components/Nav";

const { src: pattern } = pattern__res;

const bg__pattern = {
  backgroundImage: `url(${pattern})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Pool = () => {
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
        <title>Leet Source - Pool Tips</title>
        <meta
          name="google-site-verification"
          content="ovvmP3s_dWVp7bb05Bb8nGIrneErM1TaR8UDf2Yu32c"
        />
        <meta name="description" content="1337 Pool Tips and Info" />
        <meta
          name="keywords"
          content="source leet, leet source, source, leet, source 1337, 1337.ma,  1337, resource, cursus, pool, libft"
        />

        <meta property="og:url" content="https://source.leet.ma/tips/pool" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Leet Source" />
        <meta property="og:description" content="1337 Pool Tips and Info" />
        <meta
          property="og:image"
          content="https://media.graphassets.com/YPq8cdnARUac586rauOS"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="source.leet.ma" />
        <meta
          property="twitter:url"
          content="https://source.leet.ma/tips/pool"
        />
        <meta name="twitter:title" content="Leet Source" />
        <meta name="twitter:description" content="1337 Pool Tips and Info" />
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
            <p className="subheading mb-2">Pool Tips</p>

            <h1 className="heading">
              In order to ensure a successful and enjoyable pool, we recommend
              following these simple tips.
            </h1>
          </div>
        </div>
        <div
          className="image__container"
          style={{ height: `calc(${height}px - 8vh + 4rem)` }}
        >
          <Image
            ref={image}
            src={pt_banner}
            className="pt_banner"
            alt="Illustration"
          />
        </div>
      </header>
      <main className="tips__main">
        <section className="description">
          <h2 className="heading mb-2 mt-2 primary">Congratulations</h2>
          <p className="text mb-4">
            Congratulations on becoming a pisciner at 1337!
            <br />
            Get ready for an unforgettable month of learning and growth.
          </p>
          <h2 className="heading mb-2 mt-6 primary">General Tips</h2>
          <ul className="list">
            <li className="text list__item">
              Manage your time effectively by creating a schedule.
            </li>
            <li className="text list__item">
              Keep track of new information by taking notes.
            </li>
            <li className="text list__item">
              Maintain good personal hygiene by showering regularly.
            </li>
            <li className="text list__item">
              Prioritize sufficient sleep to maintain focus and productivity.
            </li>
            <li className="text list__item">
              Avoid distractions caused by hunger by eating a nutritious diet.
            </li>
            <li className="text list__item">
              Think before speaking to avoid damaging professional
              relationships.
            </li>
            <li className="text list__item">
              Show respect to all team members, including technical, cleaning,
              and security staff.
            </li>
            <li className="text list__item">
              Take care of equipment and facilities to maintain a safe and
              comfortable work environment.
            </li>
            <li className="text list__item">
              Foster positive relationships with colleagues by being friendly
              and building professional connections.
            </li>
          </ul>
        </section>
      </main>
      {win > 900 ? <FooterDesktop /> : <FooterMobile />}
    </>
  );
};

export default Pool;
