import React, { useState } from "react";
import Link from "next/link";
import { GitHub, Linkedin, Instagram } from "react-feather";

const DesNav = ({ width }) => {
  const [col1, setCol1] = useState("#FFF");
  const [col2, setCol2] = useState("#FFF");
  const [col3, setCol3] = useState("#FFF");
  let size;

  if (width > 900 && width <= 1600) size = 24;
  else if (width > 1600) size = 30;

  return (
    <nav className="nav__dsk">
      <Link href="/">
        <h1 className="nav__title">
          <span>* </span>Leet Source
        </h1>
      </Link>
      <ul className="nav__list">
        <li className="nav__list__item">
          <Link href="/">Home</Link>
        </li>
        <li className="nav__list__item">
          <Link href="/pool">1337 Pool</Link>
        </li>
        <li className="nav__list__item">
          <Link href="/cusus">42 Cursus</Link>
        </li>
        <li className="nav__list__item">
          <Link href="/other">Other</Link>
        </li>
      </ul>
      <div className="nav__social">
        <Link
          href="https://github.com/abdoachhoubi"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => setCol1("#63ff33")}
          onMouseLeave={() => setCol1("#FFFFFF")}
        >
          <GitHub size={size} color={col1} />
        </Link>
        <Link
          href="https://linkedin.com/in/abdoachhoubi"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => setCol2("#63ff33")}
          onMouseLeave={() => setCol2("#FFFFFF")}
        >
          <Linkedin size={size} color={col2} />
        </Link>
        <Link
          href="http://instagram.com/astroboy.dev"
          target="_blank"
          rel="noreferrer"
          onMouseOver={() => setCol3("#63ff33")}
          onMouseLeave={() => setCol3("#FFFFFF")}
        >
          <Instagram size={size} color={col3} />
        </Link>
      </div>
    </nav>
  );
};

export default DesNav;
