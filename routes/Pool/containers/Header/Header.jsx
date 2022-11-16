import React, { useContext } from "react";
import { PoolContext } from "../../../../contexts";
import { Nav } from "../../../Home/components";
import { motion } from "framer-motion";
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
        <motion.h1
          className="banner__heading"
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {source.category.split(" ").map((e, i) => (
            <span className={e} key={i}>
              {e}
              <> </>
            </span>
          ))}
        </motion.h1>
        <motion.p
          className="banner__content"
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {source.introduction}
        </motion.p>
        <motion.div
          className="banner__scroll"
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <p>Scoll Down</p>
          <div className="svg__arrow">
            <ArrowDown size={size} color="rgb(99, 255, 51)" />
          </div>
        </motion.div>
      </section>
    </header>
  );
};

export default Header;
