import React from "react";
import Link from "next/link";
import { ArrowDown } from "react-feather";
import pic from "../../../../public/banner__illustration.svg";

const { src: img } = pic;

const Banner = () => {
  return (
    <section className="home__banner">
      <h1 className="banner__title">
        Your guide to become a <span>successful</span> developer
      </h1>
      <p className="banner__content">
        Leetsource is where 1337 students can find any resource related to 1337
        pool, 42 cursus, and programming generally
      </p>
      <Link
        className="banner__cta"
        href="https://1337.ma"
        target="_blank"
        rel="noreferrer"
      >
        About 1337 School
      </Link>
      <img className="banner__illustration" src={img} alt="illustration" />
      <div className="banner__scroll">
        <p>Scoll Down</p>
        <div className="svg__arrow">
          <ArrowDown size={30} color="rgb(99, 255, 51)" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
