import React from "react";
import TimelineElement from "./TimelineElement/TimelineElement";
import "./Timeline.scss";
import sushiPlus from "../../assets/BeaglePlus.png";
import womb from "../../assets/Womb.png";
import born from "../../assets/Born.png";
import pixel from "../../assets/JackRussellFace.png";
import getDistance from "../../utils/getDistance";

const TOTAL_DAYS = 116;

const Timeline = () => {
  const distance = getDistance();

  const timelineElements = [
    {
      image: sushiPlus,
      title: "Sushi is too alone!",
      date: "12/01/2021",
      active: true,
    },
    {
      image: womb,
      title: "Lima is pregnant!",
      date: "29/03/2021",
      active: true,
    },
    {
      image: born,
      title: "Pixel is born!",
      date: "29/04/2021",
      active: true,
    },
    {
      image: pixel,
      title: "Welcome Pixel!",
      date: "27/05/2021",
      active: distance < 0,
    },
  ];

  const getWidth = () => {
    const missingDays = TOTAL_DAYS - Math.floor(distance / (1000 * 3600 * 24));

    return missingDays / TOTAL_DAYS * 100;
  };

  return (
    <div className="timeline__container">
      <div className="timeline">
        {timelineElements.map((elem) => (
          <TimelineElement {...elem} key={elem.date} />
        ))}
      </div>
      <div className="timeline-progress" style={{ width: `${getWidth()}%` }} />
    </div>
  );
};

export default Timeline;
