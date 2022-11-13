import React from "react";
import MobNav from "./src/MobNav";
import DesNav from "./src/DesNav";

const Nav = ({ width }) => {
  return width > 900 ? <DesNav width={width} /> : <MobNav />;
};

export default Nav;
