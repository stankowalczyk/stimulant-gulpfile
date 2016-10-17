import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

function App(props) {
  return (
    <div className="app">
      <h1>Test</h1>
      <p>This is a test app!</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("react"));
