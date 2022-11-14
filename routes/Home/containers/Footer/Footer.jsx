import React from "react";
import Link from "next/link";
import { ArrowUp } from "react-feather";

const Footer = () => {
  return (
    <footer className="home__footer">
      <p>
        Designed and developed with <span className="footer__green">Love</span>{" "}
        by{" "}
        <Link className="footer__green" href="https://aachhoub.vercel.app">
          Astroboy
        </Link>
      </p>
      <p>Leet Source &copy; all rights belong to their respective oweners</p>
      <Link href="/">
        Go Up <ArrowUp color="rgb(16, 16, 16)" size={22} />
      </Link>
    </footer>
  );
};

export default Footer;
