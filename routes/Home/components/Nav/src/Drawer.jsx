import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GitHub, Linkedin, Instagram, X } from "react-feather";
import { motion } from "framer-motion";

const Drawer = ({ menu, setMenu }) => {
  /* ---- Switching link color depending on route ---- */

  const { route } = useRouter();
  const switchColor = (r) => {
    if (r == route) {
      return "rgb(122, 255, 51)";
    }
  };

  /* ------------------------------------------------- */

  /* ---------- Drawer animations variants ----------- */

  const variants = {
    in: { x: 0, opacity: 1 },
    out: { x: "100%", opacity: 0 },
  };

  /* ------------------------------------------------- */

  return (
    <motion.div
      className="nav__drawer"
      variants={variants}
      initial={variants.out}
      animate={menu == "in" ? "in" : "out"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="menu__close" onClick={() => setMenu("out")}>
        <X size={26} color="rgb(255, 255, 255)" />
      </div>
      <ul className="nav__list">
        <li className="nav__list__item" onClick={() => setMenu("out")}>
          <Link style={{ color: `${switchColor("/")}` }} href="/">
            Home
          </Link>
        </li>
        <li className="nav__list__item" onClick={() => setMenu("out")}>
          <Link style={{ color: `${switchColor("/pool")}` }} href="/pool">
            1337 Pool
          </Link>
        </li>
        <li className="nav__list__item" onClick={() => setMenu("out")}>
          <Link style={{ color: `${switchColor("/cusus")}` }} href="/cusus">
            42 Cursus
          </Link>
        </li>
        <li className="nav__list__item" onClick={() => setMenu("out")}>
          <Link style={{ color: `${switchColor("/other")}` }} href="/other">
            Other
          </Link>
        </li>
      </ul>
      <div className="nav__social">
        <Link
          href="https://github.com/abdoachhoubi"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub size={26} color="rgb(255, 255, 255)" />
        </Link>
        <Link
          href="https://linkedin.com/in/abdoachhoubi"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => setCol2("#63ff33")}
          onMouseLeave={() => setCol2("rgb(255, 255, 255)")}
        >
          <Linkedin size={26} color="rgb(255, 255, 255)" />
        </Link>
        <Link
          href="http://instagram.com/astroboy.dev"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => setCol3("#63ff33")}
          onMouseLeave={() => setCol3("rgb(255, 255, 255)")}
        >
          <Instagram size={26} color="rgb(255, 255, 255)" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Drawer;
