import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./queries.css";
// import App from "./AppV1.js";
import App from "./AppV2.js";
import StarRating from "./StarRating.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} /> */}
  </React.StrictMode>
);
