import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <p>
        Designed and developed with{" "}
        <span style={{ color: "rgb(99, 255, 51)" }}>Love</span> by{" "}
        <Link
          style={{ color: "rgb(99, 255, 51)" }}
          href="https://aachhoub.vercel.app"
        >
          Astroboy
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
