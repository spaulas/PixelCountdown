import React from "react";
import "./Placard.scss";
import Countdown from "../Countdown/Countdown";

const Placard = () => {
  return (
    <div className="placard">
      <div className="placard-board">
        <Countdown />
      </div>
      <div className="placard-animation" />
    </div>
  );
};

export default Placard;
