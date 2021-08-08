import Countdown from "../Countdown/Countdown";
import "./Placard.scss";

const Placard = ({ timer }) => {
  return (
    <div className="placard">
      <div className="placard-board">
        <Countdown timer={timer} />
      </div>
      <div className="placard-animation" />
    </div>
  );
};

export default Placard;
