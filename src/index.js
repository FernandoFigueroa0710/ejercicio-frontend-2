import React from "react";
import ReactDOM from "react-dom";
import employees from "./employees/index";
import App from "./App";
import "../css/style.css";

ReactDOM.render(<App list={employees} />, document.getElementById("root"));
