import { useState, createContext } from "react";
import { getOriginalDistance } from "../utils/getDistance";

export const ShowTimelineContext = createContext({
  showTimeline: false,
  setShowTimeline: (value) => null,
});

const ShowTimelineProvider = ({ children }) => {
  const [showTimeline, setShowTimeline] = useState(getOriginalDistance() > 0);

  return (
    <ShowTimelineContext.Provider value={{ showTimeline, setShowTimeline }}>
      {children}
    </ShowTimelineContext.Provider>
  );
};

export default ShowTimelineProvider;
