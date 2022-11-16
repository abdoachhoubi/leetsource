import React from "react";
import Link from "next/link";
import { ArrowDown } from "react-feather";
import { motion } from "framer-motion";
import pic from "../../../../public/banner__illustration.svg";

const { src: img } = pic;

const Banner = ({ width }) => {
  let size;
  if (width <= 900) size = 22;
  else if (width > 900 && width <= 1600) size = 26;
  else size = 30;

  return (
    <section className="home__banner">
      <article className="banner__hero">
        <motion.h1
          className="banner__title"
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Your guide to become a <span>successful</span> developer
        </motion.h1>
        <motion.p
          className="banner__content"
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Leetsource is where 1337 students can find any resource related to
          1337 pool, 42 cursus, and programming generally
        </motion.p>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Link
            className="banner__cta"
            href="https://1337.ma"
            target="_blank"
            rel="noreferrer"
          >
            About 1337 School
          </Link>
        </motion.div>
      </article>
      <motion.img
        initial={{ scale: 0.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="banner__illustration"
        src={img}
        alt="illustration"
      />
      <motion.div
        className="banner__scroll"
        initial={{ scale: 0.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <p>Scoll Down</p>
        <div className="svg__arrow">
          <ArrowDown size={size} color="rgb(99, 255, 51)" />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
