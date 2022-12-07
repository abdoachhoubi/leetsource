import React, { useState, useContext, useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "react-feather";
import { HomeContext } from "../../../../contexts";
import { PRIMARY_COLOR } from "../../../../data";
import pic from "../../../../public/contact__illustration.svg";

// Getting the contact illustration pic src
const { src } = pic;

// Getting contact form emailjs keys
const contact = {
  KEY: process.env.NEXT_PUBLIC_CONTACT__PUB__KEY,
  SERV: process.env.NEXT_PUBLIC_CONTACT__SERV__ID,
  TEMP: process.env.NEXT_PUBLIC_CONTACT__TEMP__ID,
};

const Main = ({ main__ref }) => {
  /* ----------------- Getting Data ------------------ */

  let pools, abouts;
  const { data } = useContext(HomeContext);
  if (data && data[0] && data[1]) {
    pools = data[0].pools;
    abouts = data[1].abouts;
  }

  /* ------------------------------------------------- */

  /* ---------------- handle Contact ----------------- */
  const [mail, setMail] = useState("");
  const [sub, setSub] = useState("");
  const [text, setText] = useState("");
  const [visible, setVisible] = useState("false");
  const [message, setMessage] = useState("");
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(contact.SERV, contact.TEMP, form.current, contact.KEY)
      .then(() => {
        setMail("");
        setSub("");
        setText("");
        setMessage("Email has been sent successfully!");
        window.setTimeout(() => setVisible("hidden"), 2000);
      })
      .catch((e) => setMessage(`{e.message}, try again later!`));
    setVisible("visible");
  };

  /* ------------------------------------------------- */

  return (
    <main className="home__main" ref={main__ref}>
      <h1 className="main__heading">Why 1337?</h1>
      <p className="main__content">
        At 1337 School we have the freedom to learn the way we want and whenever
        we want!
      </p>
      <div className="home__main__info">
        <section className="info__section mb__10vh start">
          <h2 className="info__heading">{pools[0]?.title}</h2>
          <p className="info__content">{pools[0]?.content}</p>
          <Link href="/pool">
            <span>Discover Pool</span>
            <ArrowUpRight size={18} color={PRIMARY_COLOR} />
          </Link>
        </section>
        <section className="info__section mb__10vh end">
          <h2 className="info__heading">{pools[1]?.title}</h2>
          <p className="info__content">{pools[1]?.content}</p>
          <Link href="/cursus">
            <span>Discover Cursus</span>
            <ArrowUpRight size={20} color={PRIMARY_COLOR} />
          </Link>
        </section>
        <section className="info__section mb__10vh start">
          <h2 className="info__heading">{pools[2]?.title}</h2>
          <p className="info__content">{pools[2]?.content}</p>
          <Link href="/paths">
            <span>Discover Paths</span>
            <ArrowUpRight size={18} color={PRIMARY_COLOR} />
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
            ref={form}
            onSubmit={(e) => sendMail(e)}
            encType="text/plain"
            name="contact__form"
            className="contact__form"
          >
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              onClick={() => setVisible("hidden")}
              className="in"
              type="email"
              name="mail"
              id="form__mail"
              placeholder="Email"
              required
            />
            <input
              value={sub}
              onChange={(e) => setSub(e.target.value)}
              onClick={() => setVisible("hidden")}
              className="in"
              name="sub"
              id="form__subject"
              placeholder="Name"
              required
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              onClick={() => setVisible("hidden")}
              className="in"
              type="text"
              name="text"
              id="form__content"
              placeholder="Message"
              required
            />
            <p className={`notif ${visible}`}>{message}</p>
            <input className="submit" type="submit" value="Send" />
          </form>
          <img className="contact__illustration" src={src} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Main;
