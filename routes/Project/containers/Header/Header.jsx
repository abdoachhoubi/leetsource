import React, { useContext } from "react";
import { ProjectContext } from "../../../../contexts";
import { Nav } from "../../../Home/components";

const Header = () => {
  let stitle;
  const { width, title, description } = useContext(ProjectContext);
  stitle = title.split("-")[1].trim();
  return (
    <header className="project__header">
      <Nav width={width} />
      <h1 className="header__heading">{stitle}</h1>
      <p className="header__desc">{description}</p>
    </header>
  );
};

export default Header;
