import React, { useContext } from "react";
import { PoolContext } from "../../../../contexts";
import { Nav } from "../../../Home/components";
import { ArrowDown } from "react-feather";

const Header = ({ source }) => {
  const { width } = useContext(PoolContext);
  let size;

  if (width <= 900) size = 22;
  else if (width > 1000 && width <= 1200) size = 18;
  else if (width > 1200 && width <= 1600) size = 26;
  else size = 30;

  return (
    <header className="pool__header">
      <Nav width={width} />
      <section className="banner">
        <h1 className="banner__heading">
          {source.category.split(" ").map((e, i) => (
            <span className={e} key={i}>
              {e}
              <> </>
            </span>
          ))}
        </h1>
        <p className="banner__content">
          {source.introduction.split("").map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </p>
        <div className="banner__scroll">
          <p>Scoll Down</p>
          <div className="svg__arrow">
            <ArrowDown size={size} color="rgb(99, 255, 51)" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
