import React, { useContext } from "react";
import { Nav } from "../../../Home/components";
import { ArrowDown } from "react-feather";
import { PRIMARY_COLOR } from "../../../../data";
import { CursusContext } from "../../../../pages/cursus";

const Header = ({ scrollToMain, title }) => {
  /* --------------- Destructuring data -------------- */

  const { data, width } = useContext(CursusContext);
  const { source } = data;

  /* ------------------------------------------------- */

  /* ---------------- Scoll icon size ---------------- */

  let size;
  if (width <= 900) size = 22;
  else if (width > 1000 && width <= 1200) size = 18;
  else if (width > 1200 && width <= 1600) size = 26;
  else size = 30;

  /* ------------------------------------------------- */

  return (
    <div className="cursus__header">
      <Nav width={width} />
      <section className="banner">
        <h1 className="banner__heading">
          {source.category.split(" ").map((e, i) => (
            <span key={i} className={e}>
              {e}
              {i == 0 && <> </>}
            </span>
          ))}
        </h1>
        <p className="banner__content">
          {source.introduction.split("$").map((e, i) => (
            <span key={i}>
              {e}
              <br />
            </span>
          ))}
        </p>
        <div className="banner__scroll" onClick={() => scrollToMain()}>
          <p>Scoll Down</p>
          <div className="svg__arrow">
            <ArrowDown size={size} color={PRIMARY_COLOR} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
