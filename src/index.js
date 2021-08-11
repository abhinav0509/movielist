require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  return (
    <div>
      <h2>Setting react app from scratch</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
