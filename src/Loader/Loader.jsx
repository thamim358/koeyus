import React from "react";
import { waveform } from "ldrs";
import "./Loader.scss"
waveform.register();

const Loader = () => {
  return (
    <div id="loader">
    <div className="cube-folding">
      <span className="leaf1"></span>
      <span className="leaf2"></span>
      <span className="leaf3"></span>
      <span className="leaf4"></span>
    </div>
  </div>
  );
};

export default Loader;
