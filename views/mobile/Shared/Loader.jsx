import React from "react";
import { Circle } from "react-feather";

const wrapper__styles = {
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 999,
  backgroundColor: "#101010",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Loader = ({ visibility }) => {
  return (
    <div className={`loader__wapper ${visibility}`} style={wrapper__styles}>
      <p className="subheading mb-4 w-full t-center">Loading...</p>
      <div className="loader__animation">
        <Circle color="#FFFFFF" size={30} />
      </div>
    </div>
  );
};

export default Loader;
