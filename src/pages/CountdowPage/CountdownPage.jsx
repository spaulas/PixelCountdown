import { useEffect, useState, useContext } from "react";
import Placard from "../../components/Placard/Placard";
import Timeline from "../../components/Timeline/Timeline";
import "./CountdownPage.scss";
import { ShowTimelineContext } from "../../providers/ShowTimelineProvider";
import getDistance from "../../utils/getDistance";

// TODO ADD HIDE AND SHOW EFFECT
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
  const timeInterval = showTimeline ? 100 : 1000;

  useEffect(() => {
    if (counter < 110) {
      getDistance(timeInterval, counter).then((distance) => {
        const days = Math.floor(distance / (1000 * 3600 * 24));
        const hours = Math.floor(
          (distance % (1000 * 3600 * 24)) / (1000 * 3600)
        );
        const minutes = Math.floor((distance % (1000 * 3600)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance <= 0) {
          setTimer({ days: "00", hours: "00", minutes: "00", seconds: "00" });
          setAnimation("countdown-page--hide");
          setTimeout(() => setShowTimeline(false), 2000);
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
