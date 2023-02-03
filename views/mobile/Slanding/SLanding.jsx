import React from "react";
import data from "../../../content/Home";
import Nav from "./Components/Nav";
import Link from "next/link";
import Image from "next/image";
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

const SLanding = () => {
  return (
    <>
      <header className="s-home__header">
        <Nav />
        <section className="s-heading__wrapper">
          <h1 className="s-heading">
            Looking for some
            <br /> useful programming resources?
          </h1>
        </section>
        <section className="s-header__section text-dark">
          <h1 className="s-heading mb-2">
            You&apos;re in the right
            <br />
            place!
          </h1>
          <p className="text t-center mb-6">
            LeetSource is where 42 School students can find programming
            resources.
            <br />
            Our mission is to provide a comprehensive collection of resources,
            making it effortless for you to access all the information you need.
          </p>
        </section>
        <Image
          src={home_banner}
          alt="Two peers working together in harmony, depicted in a visually striking illustration."
          className="s-header__banner"
        />
      </header>
      <main className="s-home__main">
        <section className="s-main__section1">
          <h1 className="s-heading mb-6">
            LeetSource is here to help you find{" "}
            <span className="primary">useful resources</span> without wasting
            time
          </h1>
          <article className="s-tips__section">
            {tips.map(({ text, ic }, i) => (
              <div key={i} className="s-ic__item mb-6">
                <div className="s-ic__item-wrapper mb-2">
                  <Image src={ic} alt="icon" className="ic__item-icon" />
                </div>
                <p className="s-subheading">{text}</p>
              </div>
            ))}
          </article>
        </section>
        <section className="s-main__section2">
          {en.section1.map(({ title, description, route }, i) => (
            <div key={i} className="s-card__item text-dark">
              <div className="s-content">
                <h1 className="s-card__heading mb-2">{title}</h1>
                {description.split("$").map((e, i) => (
                  <p key={i} className="s-text">
                    {e}
                  </p>
                ))}
              </div>
              <Link
                className="s-text button__dark t-center mt-2 w-100"
                href={route}
              >
                Discover
              </Link>
            </div>
          ))}
        </section>
        <section className="s-main__section3">
          <h1 className="s-subheading mb-3">
            Our goal is to establish a community platform where developers can{" "}
            <span className="primary">freely exchange and share</span> their
            resources with one another
          </h1>
          <p className="s-text">
            Initially, our goal with this project was simply to improve our web
            development abilities and create something beneficial for others.
            However, as we progressed, we recognized the potential for something
            even greater.
            <br />
            <br />
            We are now envisioning a platform that allows developers to share
            their own tools, resources, tips, and potentially even courses with
            one another.
          </p>
        </section>
        <section className="s-main__section4">
          <Image
            className="s-contact__illustration"
            src={contact_illustration}
            alt="contact illustration"
          />
          <Form pattern={pattern} />
        </section>
      </main>
      <footer className="s-home__footer">
        <p className="s-subheading mb-1">
          <span className="primary">*</span>LeetSource
        </p>
        <section className="nav mt-4 mb-4">
          <Link className="s-text light" href="/">
            Home
          </Link>
          <Link className="s-text light" href="/terms">
            Terms and Conditions
          </Link>
          <Link className="s-text light" href="/about">
            About
          </Link>
          <Link className="s-text light" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="s-text light" href="/blog">
            Blog
          </Link>
          <Link className="s-text light" href="/cookie">
            Cookie Policy
          </Link>
        </section>
        <p className="s-text t-center">
          &copy; 2023 LeetSource, All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default SLanding;
