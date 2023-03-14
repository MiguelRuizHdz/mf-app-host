import React from "react";
import ReactDOM from "react-dom";

import Navbar from "navbar/Navbar"

const App = () => (
  <>
    <Navbar />
    <h1>Host App</h1>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
