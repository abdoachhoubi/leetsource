import React, { useState } from "react";
import Drawer from "./Drawer";
import { Menu } from "react-feather";

const MobNav = () => {
  const [menu, setMenu] = useState("out");
  return (
    <nav className="nav__mob">
      <div className="navbar">
        <h1 className="nav__title">
          <span>* </span>Leet Source
        </h1>
        <div className="menu__open" onClick={() => setMenu("in")}>
          <Menu size={20} color="#FFFFFF" />
        </div>
      </div>
      <Drawer menu={menu} setMenu={setMenu} />
    </nav>
  );
};

export default MobNav;
