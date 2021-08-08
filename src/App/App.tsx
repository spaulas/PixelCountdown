import React, { useContext } from "react";
import "./App.scss";
import CountdownPage from "../pages/CountdowPage/CountdownPage";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import { ShowTimelineContext } from "../providers/ShowTimelineProvider";

// TODO CREATE CONSTANTS FORM TIME AND COLORS!

function App() {
  const { showTimeline } = useContext(ShowTimelineContext);

  return (
    <div className="App">
      {showTimeline ? <CountdownPage /> : <WelcomePage />}
    </div>
  );
}

export default App;
