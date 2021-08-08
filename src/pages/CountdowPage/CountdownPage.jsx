import { useEffect, useState, useContext } from "react";
import Placard from "../../components/Placard/Placard";
import Timeline from "../../components/Timeline/Timeline";
import { ShowTimelineContext } from "../../providers/ShowTimelineProvider";
import getDistance from "../../utils/getDistance";
import {
  MINUTE,
  HOUR,
  DAY,
  END_TIMELINE_TIMEOUT,
  ORIGINAL_INTERVAL,
  FAST_INTERVAL,
} from "../../constants/time";
import "./CountdownPage.scss";

const CountdownPage = () => {
  const { showTimeline, setShowTimeline } = useContext(ShowTimelineContext);

  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [distance, setDistance] = useState(0);
  const [counter, setCounter] = useState(0);
  const [animation, setAnimation] = useState("");
  
  const timeInterval = showTimeline ? FAST_INTERVAL : ORIGINAL_INTERVAL;

  useEffect(() => {
    if (counter < 110) {
      getDistance(timeInterval, counter).then((distance) => {
        const days = Math.floor(distance / DAY);
        const hours = Math.floor((distance % DAY) / HOUR);
        const minutes = Math.floor((distance % HOUR) / MINUTE);
        const seconds = Math.floor((distance % MINUTE) / 1000);

        if (distance <= 0) {
          setTimer({ days: "00", hours: "00", minutes: "00", seconds: "00" });
          setAnimation("countdown-page--hide");
          setTimeout(() => setShowTimeline(false), END_TIMELINE_TIMEOUT);
        } else {
          setTimer({ days, hours, minutes, seconds });
          setCounter((current) => current + 1);
        }

        setDistance(distance);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  return (
    <div className={`countdown-page ${animation}`}>
      <h1>PIXEL IS COMING HOME!</h1>
      <Placard timer={timer} />
      <Timeline distance={distance} />
    </div>
  );
};

export default CountdownPage;
