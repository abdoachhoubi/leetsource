import React, { useState, useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { HomeContext } from "../../../../contexts";
import pic from "../../../../public/contact__illustration.svg";
import { Card } from "../../components";

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
      <div className="home__main__info">
        <Card
          title={pools[0]?.title}
          content={pools[0]?.content}
          link="/pool"
        />
        <Card
          title={pools[1]?.title}
          content={pools[1]?.content}
          link="/cursus"
        />
        <Card
          title={pools[2]?.title}
          content={pools[2]?.content}
          link="/paths"
        />
      </div>
      <section className="home__about">
        <h1 className="main__heading">About *Leet Source</h1>
        <p className="main__content wide">
          It's the best place where developers - especially 1337 students - can
          find tools and resources.
        </p>
        <div className="home__main__about">
          {abouts?.map(({ title, content }, i) => (
            <Card
              title={title}
              content={content}
              bottom__margin="mb__0"
              key={i}
            />
          ))}
        </div>
      </section>
      <section className="main__quote">
        <q>
          Most good programmers do programming not because they expect to get
          paid or get adulation by the public, but because it is fun to program.
        </q>
        <p>- Linus Torvalds</p>
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
