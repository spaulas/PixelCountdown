import React from "react";
import "./TimelineElement.scss";

const TimelineElement = ({ image, title, date, active }) => {
  return (
    <div
      className={`timeline-element ${active ? "timeline-element--active" : ""}`}
    >
      <div className="timeline-element__title">{title}</div>
      <div className="timeline-element__image">
        <img src={image} alt="" />
      </div>
      <div className="timeline-element__date">{date}</div>
    </div>
  );
};

export default TimelineElement;
