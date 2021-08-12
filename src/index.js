require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import List from "./containers/List";
import "./index.css";

const App = () => {
  return (
    <div>
      <h2>Movie List</h2>
      <List />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
