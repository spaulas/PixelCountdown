import React from "react";
import Placard from "../../components/Placard/Placard";
import Timeline from "../../components/Timeline/Timeline";
import "./CountdownPage.scss";

const CountdownPage = () => {
  return (
    <div className="countdown-page">
      <h1>PIXEL IS COMING HOME!</h1>
      <Placard />
      <Timeline />
    </div>
  );
};

export default CountdownPage;
