import React from "react";
import MobNav from "./src/MobNav";
import DesNav from "./src/DesNav";

const Nav = ({ width, auth }) => {
  return width > 900 ? (
    <DesNav width={width} auth={auth} />
  ) : (
    <MobNav auth={auth} />
  );
};

export default Nav;
