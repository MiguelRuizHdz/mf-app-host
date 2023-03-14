import React from "react";
import ReactDOM from "react-dom";

import Navbar from "navbar/Navbar"

import CounterReact from "counterReact/CounterReact";
const App = () => (
  <>
    <Navbar />
    <h1>Host App</h1>
    <CounterReact />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
