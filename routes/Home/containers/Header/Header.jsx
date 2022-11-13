import React, { useContext } from "react";
import { Nav, Banner } from "../../components";
import { HomeContext } from "../../../../contexts";

const Header = () => {
  const { width } = useContext(HomeContext);
  return (
    <header className="home__header">
      <Nav width={width} />
      <Banner />
    </header>
  );
};

export default Header;
