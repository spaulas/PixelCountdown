import React, { useState } from "react";
import "./Countdown.scss";
import getDistance from "../../utils/getDistance";

const Countdown = () => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const interval = setInterval(function () {
    const distance = getDistance();

    const days = Math.floor(distance / (1000 * 3600 * 24));
    const hours = Math.floor((distance % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((distance % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(interval);
      setTimer({ days: "00", hours: "00", minutes: "00", seconds: "00" });
    } else {
      setTimer({ days, hours, minutes, seconds });
    }
  }, 1000);

  const convertNumber = (number) => {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  };

  return (
    <div className="countdown">
      {Object.keys(timer).map((key) => (
        <div className="countdown-unit">
          <div className="countdown-unit__column">
            <h2>{convertNumber(timer[key])}</h2>
            <h3>{key}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
