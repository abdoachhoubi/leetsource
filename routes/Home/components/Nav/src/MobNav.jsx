import React, { useState } from "react";
import Drawer from "./Drawer";
import { Menu } from "react-feather";
import { motion } from "framer-motion";

const MobNav = () => {
  const [menu, setMenu] = useState("out");
  return (
    <nav className="nav__mob">
      <div className="navbar">
        <motion.h1
          className="nav__title"
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <span>* </span>Leet Source
        </motion.h1>
        <motion.div
          className="menu__open"
          onClick={() => setMenu("in")}
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Menu size={26} color="#FFFFFF" />
        </motion.div>
      </div>
      <Drawer menu={menu} setMenu={setMenu} />
    </nav>
  );
};

export default MobNav;
