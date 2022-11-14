import React from "react";
import Link from "next/link";
import { GitHub, Linkedin, Instagram, X } from "react-feather";
import { motion } from "framer-motion";

const Drawer = ({ menu, setMenu }) => {
  const variants = {
    in: { x: 0, opacity: 1 },
    out: { x: "100%", opacity: 0 },
  };
  return (
    <motion.div
      className="nav__drawer"
      variants={variants}
      initial={variants.out}
      animate={menu == "in" ? "in" : "out"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="menu__close" onClick={() => setMenu("out")}>
        <X size={26} color="rgb(16, 16, 16)" />
      </div>
      <ul className="nav__list">
        <li className="nav__list__item" onClick={() => setMenu("out")}>
          <Link href="/">Home</Link>
        </li>
        <li className="nav__list__item" onClick={() => setMenu("out")}>
          <Link href="/pool">1337 Pool</Link>
        </li>
        <li className="nav__list__item" onClick={() => setMenu("out")}>
          <Link href="/cusus">42 Cursus</Link>
        </li>
        <li className="nav__list__item" onClick={() => setMenu("out")}>
          <Link href="/other">Other</Link>
        </li>
      </ul>
      <div className="nav__social">
        <Link
          href="https://github.com/abdoachhoubi"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub size={26} color="rgb(16, 16, 16)" />
        </Link>
        <Link
          href="https://linkedin.com/in/abdoachhoubi"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => setCol2("#63ff33")}
          onMouseLeave={() => setCol2("rgb(16, 16, 16)")}
        >
          <Linkedin size={26} color="rgb(16, 16, 16)" />
        </Link>
        <Link
          href="http://instagram.com/astroboy.dev"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => setCol3("#63ff33")}
          onMouseLeave={() => setCol3("rgb(16, 16, 16)")}
        >
          <Instagram size={26} color="rgb(16, 16, 16)" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Drawer;
