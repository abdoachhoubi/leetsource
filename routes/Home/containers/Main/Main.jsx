import React, { useContext } from "react";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";
import { HomeContext } from "../../../../contexts";
import pic from "../../../../public/contact__illustration.svg";

const { src } = pic;

const Main = () => {
  /* ----------------- Getting Data ------------------ */

  const { data } = useContext(HomeContext);
  const { pools } = data[0];
  const { abouts } = data[1];

  /* ------------------------------------------------- */

  return (
    <main className="home__main">
      <h1 className="main__heading">Why 1337?</h1>
      <p className="main__content">
        In 1337 School we have the freedom to learn the way we want and whenever
        we want!
      </p>
      <div className="home__main__info">
        <section className="info__section mb__10vh start">
          <h2 className="info__heading">{pools[0].title}</h2>
          <p className="info__content">{pools[0].content}</p>
          <Link href="/pool">
            <span>Discover Pool</span>
            <ArrowUpRight size={18} color="rgb(99, 255, 51)" />
          </Link>
        </section>
        <section className="info__section mb__10vh end">
          <h2 className="info__heading">{pools[1]?.title}</h2>
          <p className="info__content">{pools[1]?.content}</p>
          <Link href="/cursus">
            <span>Discover Cursus</span>
            <ArrowUpRight size={20} color="rgb(99, 255, 51)" />
          </Link>
        </section>
        <section className="info__section mb__10vh start">
          <h2 className="info__heading">{pools[2]?.title}</h2>
          <p className="info__content">{pools[2]?.content}</p>
          <Link href="/paths">
            <span>Discover Paths</span>
            <ArrowUpRight size={18} color="rgb(99, 255, 51)" />
          </Link>
        </section>
      </div>
      <section className="main__quote">
        <q>
          Most good programmers do programming not because they expect to get
          paid or get adulation by the public, but because it is fun to program.
        </q>
        <p>- Linus Torvalds</p>
      </section>
      <section className="home__about">
        <h1 className="main__heading">About *Leet Source</h1>
        <p className="main__content wide">
          It's the best place where developers - especially 1337 students - can
          find tools and resources.
        </p>
        <article className="main__article start">
          <h2 className="article__heading">{abouts[0]?.title}</h2>
          <p className="article__content">{abouts[0]?.content}</p>
        </article>
        <article className="main__article end">
          <h2 className="article__heading">{abouts[1]?.title}</h2>
          <p className="article__content">{abouts[1]?.content}</p>
        </article>
        <article className="main__article start">
          <h2 className="article__heading">{abouts[2]?.title}</h2>
          <p className="article__content">{abouts[2]?.content}</p>
        </article>
      </section>
      <section className="home__contact">
        <h1 className="main__heading">Contact Us</h1>
        <p className="main__content wide">
          Whether you'd like to have a nice chat about coding or a question
          reach us out!
        </p>
        <div className="contact__area">
          <form
            action="mailto:leetsource@gmail.com"
            method="POST"
            encType="text/plain"
            name="contact__form"
            className="contact__form"
          >
            <input
              className="in"
              type="email"
              name="email"
              id="form__mail"
              placeholder="Email"
            />
            <input
              className="in"
              name="subject"
              id="form__subject"
              placeholder="Subject"
            />
            <textarea
              className="in"
              type="text"
              name="subject"
              id="form__content"
              placeholder="Message"
            />
            <input className="submit" type="submit" value="Send" />
          </form>
          <img className="contact__illustration" src={src} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Main;
