import React, { useState } from "react";
import { Menu, X } from "react-feather";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 1,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const Drawer = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      initial={"closed"}
      className="s-mob__drawer"
    >
      <div className="drawer__nav">
        <h1 className="s-subheading">
          <span className="primary">*</span>LeetSource
        </h1>
        <span
          className="s-menu__close__button"
          onClick={() => setIsOpen(false)}
        >
          <X color="#FFFFFF" size={24} />
        </span>
      </div>
      <ul className="s-mob__drawer-list">
        <li className="nav__item">
          <Link className="s-subheading" href="/">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link className="s-subheading" href="/pool">
            Pool
          </Link>
        </li>
        <li className="nav__item">
          <Link className="s-subheading" href="/cursus">
            Cursus
          </Link>
        </li>
        <li className="nav__item">
          <Link className="s-subheading" href="/paths">
            Paths
          </Link>
        </li>
        <li className="nav__item">
          <Link className="s-subheading" href="/resources">
            Resources
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="s-mob__nav">
      <h1 className="s-subheading">
        <span className="primary">*</span>LeetSource
      </h1>
      <span className="s-menu__open__button" onClick={() => setIsOpen(true)}>
        <Menu color="#FFFFFF" size={24} />
      </span>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Nav;
