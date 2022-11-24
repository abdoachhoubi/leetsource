import React, { useContext } from "react";
import { Nav, Banner } from "../../components";
import { HomeContext } from "../../../../contexts";

const Header = ({ scrollToMain }) => {
  /* ---------------- Viewport Width ----------------- */

  const { width } = useContext(HomeContext);

  /* ------------------------------------------------- */

  return (
    <header className="home__header">
      <Nav width={width} />
      <Banner width={width} scrollToMain={scrollToMain} />
    </header>
  );
};

export default Header;
