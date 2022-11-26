import React, { useContext } from "react";
import { ProjectContext } from "../../../../contexts";
import { Nav } from "../../../Home/components";

const Header = () => {
  const { width, title, description } = useContext(ProjectContext);
  return (
    <header className="project__header">
      <Nav width={width} />
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export default Header;
