require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import List from "./containers/List";
import "./index.css";

const App = () => {
  return (
    <div>
      <h1>Inside App</h1>
      <List />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
