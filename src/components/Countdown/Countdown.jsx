import "./Countdown.scss";

const Countdown = ({ timer }) => {
  const convertNumber = (number) => {
    if (number < 10 && typeof number === "number") {
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
