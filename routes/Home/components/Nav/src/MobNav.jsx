import React, { useState } from "react";
import Link from "next/link";
import Drawer from "./Drawer";
import { Menu } from "react-feather";

const MobNav = () => {
  /* ----------------- Drawer state ------------------ */

  const [menu, setMenu] = useState("out");

  /* ------------------------------------------------- */

  return (
    <nav className="nav__mob">
      <div className="navbar">
        <Link href="/">
          <h1 className="nav__title">
            <span>* </span>Leet Source
          </h1>
        </Link>
        <div className="menu__open" onClick={() => setMenu("in")}>
          <Menu size={26} color="#FFFFFF" />
        </div>
      </div>
      <Drawer menu={menu} setMenu={setMenu} />
    </nav>
  );
};

export default MobNav;
