import { useContext} from "react";
import "./WelcomePage.scss";
import { ShowTimelineContext } from "../../utils/ShowTimelineProvider";

const WelcomePage = () => {
  const { setShowTimeline } = useContext(ShowTimelineContext);

  const goToTimeline = () => {
    setShowTimeline(true);
  };

  return (
    <div className="welcome-page">
      <div className="welcome-page__family" />
      <button onClick={goToTimeline}>Show Timeline</button>
    </div>
  );
};

export default WelcomePage;
