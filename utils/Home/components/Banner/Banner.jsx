import React from "react";
import Link from "next/link";
import { ArrowDown } from "react-feather";
import { PRIMARY_COLOR } from "../../../../data";
import pic from "../../../../public/banner__illustration.svg";

const { src: img } = pic;

const Banner = ({ width, scrollToMain }) => {
  /* ------------- Arrow Down icon size -------------- */

  let size;
  if (width <= 900) size = 22;
  else if (width > 900 && width <= 1600) size = 26;
  else size = 30;

  /* ------------------------------------------------- */

  return (
    <section className="home__banner">
      <h1 className="banner__title">
        Your guide to be a <span>successful</span> developer
      </h1>
      <p className="banner__content">
        Leetsource is where 1337 students can find any resource related to 1337
        pool, 42 cursus, and programming generally
      </p>
      <div>
        <Link
          className="banner__cta"
          href="https://1337.ma"
          target="_blank"
          rel="noreferrer"
        >
          About 1337 School
        </Link>
        <div className="banner__scroll" onClick={() => scrollToMain()}>
          <p>Scoll Down</p>
          <div className="svg__arrow">
            <ArrowDown size={size} color={PRIMARY_COLOR} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
