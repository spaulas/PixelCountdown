import TimelineElement from "./TimelineElement/TimelineElement";
import {
  DAY,
  TOTAL_DAYS,
  FIRST_ELEM_TIME,
  SECOND_ELEM_TIME,
  THIRD_ELEM_TIME,
  FOURTH_ELEM_TIME,
} from "../../constants/time";
import sushiPlus from "../../assets/BeaglePlus.png";
import womb from "../../assets/Womb.png";
import born from "../../assets/Born.png";
import pixel from "../../assets/JackRussellFace.png";
import "./Timeline.scss";

const Timeline = ({ distance }) => {
  const timelineElements = [
    {
      image: sushiPlus,
      title: "Sushi is too alone!",
      date: "12/01/2021",
      active: distance > FIRST_ELEM_TIME,
    },
    {
      image: womb,
      title: "Lima is pregnant!",
      date: "29/03/2021",
      active: distance > SECOND_ELEM_TIME,
    },
    {
      image: born,
      title: "Pixel is born!",
      date: "29/04/2021",
      active: distance > THIRD_ELEM_TIME,
    },
    {
      image: pixel,
      title: "Welcome Pixel!",
      date: "27/05/2021",
      active: distance > FOURTH_ELEM_TIME,
    },
  ];

  const getWidth = () => {
    const missingDays = TOTAL_DAYS - Math.floor(distance / DAY);
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
