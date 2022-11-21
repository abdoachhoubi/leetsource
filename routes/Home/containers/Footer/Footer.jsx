import React from "react";
import Link from "next/link";

const Footer = ({ size }) => {
  return (
    <footer className="home__footer">
      <section className="footer__container" style={size && { width: "100%" }}>
        <article className="footer__description">
          <h2 className="footer__heading">* Leet Source</h2>
          <p className="footer__quote">
            "Leet Source is meant to save you time searching for resources in
            different sources, our goal is to bring a many reources as we can
            and put them together here to make your life easier!"
          </p>
          <p className="footer__attribution">- Astroboy</p>
        </article>
        <article className="footer__links">
          <Link target="_blank" rel="noreferrer" href="https://web.leet.ma">
            Visit 1337 Web Dev club
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://leet.ma">
            Discover other Leet clubs
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://astrofolio.vercel.app"
          >
            Get in touch with Astroboy
          </Link>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
