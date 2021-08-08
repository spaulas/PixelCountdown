import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import ShowTimelineProvider from "./providers/ShowTimelineProvider";

ReactDOM.render(
  <React.StrictMode>
    <ShowTimelineProvider>
      <App />
    </ShowTimelineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
