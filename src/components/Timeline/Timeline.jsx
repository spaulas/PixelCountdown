import React from "react";
import TimelineElement from "./TimelineElement/TimelineElement";
import "./Timeline.scss";
import sushiPlus from "../../assets/BeaglePlus.png";
import womb from "../../assets/Womb.png";
import born from "../../assets/Born.png";
import pixel from "../../assets/JackRussellFace.png";

const TOTAL_DAYS = 166;

const Timeline = ({ distance }) => {
  const timelineElements = [
    {
      image: sushiPlus,
      title: "Sushi is too alone!",
      date: "12/01/2021",
      active: distance > 14206462520,
    },
    {
      image: womb,
      title: "Lima is pregnant!",
      date: "29/03/2021",
      active: distance > 8251275920,
    },
    {
      image: born,
      title: "Pixel is born!",
      date: "29/04/2021",
      active: distance > 6001538760,
    },
    {
      image: pixel,
      title: "Welcome Pixel!",
      date: "27/05/2021",
      active: distance > 46352160,
    },
  ];

  const getWidth = () => {
    const missingDays = TOTAL_DAYS - Math.floor(distance / (1000 * 3600 * 24));
    return (missingDays / TOTAL_DAYS) * 100;
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
