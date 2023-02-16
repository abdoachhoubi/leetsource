import React from "react";
import data from "../../../content/Home";
import Image from "next/image";
import Link from "next/link";
import Form from "./Components/Form";

import home_banner from "../../../public/home_banner.png";
import pattern_vector from "../../../public/pattern.svg";
import contact_illustration from "../../../public/contact.png";
import ic_1 from "../../../public/Pool.svg";
import ic_2 from "../../../public/Cursus.svg";
import ic_3 from "../../../public/Programming.svg";
import ic_4 from "../../../public/Tip.svg";

const { src: pattern } = pattern_vector;
const { src: contact } = contact_illustration;
const { en } = data;
const tips = [
  {
    text: "Pool Resources",
    ic: ic_1,
  },
  {
    text: "Cursus Resources",
    ic: ic_2,
  },
  {
    text: "Other Resources",
    ic: ic_3,
  },
  {
    text: "Tips and Guidelines",
    ic: ic_4,
  },
];

const Landing = () => {
  return (
    <>
      <header className="home__header">
        <section className="home__header--content d-flex">
          <section className="home__header-section home__header-article w-half">
            <p className="subheading title">
              <span className="primary">*</span>LeetSource
            </p>
            <h1 className="heading">
              Looking for some
              <br />
              useful programming
              <br />
              resources?
            </h1>
          </section>
          <section className="home__header-section bg-primary w-half text-dark">
            <article
              className="home__header-article bg-pattern h-80"
              style={{ backgroundImage: `url(${pattern})` }}
            >
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
              <h1 className="heading mb-h">
                You&apos;re in the right
                <br />
                place!
              </h1>
              <div className="content">
                <p className="text">
                  LeetSource is where 42 School students can find programming
                  resources.
                  <br />
                  Our mission is to provide a comprehensive collection of
                  resources, making it effortless for you to access all the
                  information you need.
                </p>
              </div>
            </article>
          </section>
        </section>
        <Image
          src={home_banner}
          alt="Two peers working together in harmony, depicted in a visually striking illustration."
          className="home__header-banner"
        />
      </header>
      <main className="home__main">
        <section className="main__section1">
          <h1 className="section__heading heading">
            LeetSource is here to help you{" "}
            <span className="primary">find useful resources</span> without
            wasting time
          </h1>
          <div className="section1__ic-container d-flex">
            {tips.map(({ text, ic }, i) => (
              <div key={i} className="ic__item">
                <div className="ic__item-wrapper">
                  <Image src={ic} alt="icon" className="ic__item-icon" />
                </div>
                <p className="text">{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="main__section2">
          <div
            className="section__wrapper h-80"
            style={{ backgroundImage: `url(${pattern})` }}
          >
            {en.section1.map(({ title, description, route }, i) => (
              <div key={i} className="card__item text-dark">
                <div className="content">
                  <h1 className="card__heading mb-2">{title}</h1>
                  {description.split("$").map((e, i) => (
                    <p key={i} className="text">
                      {e}
                    </p>
                  ))}
                </div>
                <Link className="text button__dark mt-2" href={route}>
                  Discover
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="main__section3">
          <h1 className="section__heading heading mb-4">
            Our goal is to establish a community platform where developers can{" "}
            <span className="primary">freely exchange and share</span> their
            resources with one another
          </h1>
          <p className="text">
            Initially, our goal with this project was simply to improve our web
            development abilities and create something beneficial for others.
            However, as we progressed, we recognized the potential for something
            even greater. We are now envisioning a platform that allows
            developers to share their own tools, resources, tips, and
            potentially even courses with one another.
          </p>
        </section>
        <section className="main__section4">
          <article
            className="illustration article"
            style={{ backgroundImage: `url(${contact})` }}
          />
          <Form pattern={pattern} />
        </section>
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
    </>
  );
};

export default Landing;
