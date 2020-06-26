import React from "react";
import "../src/styles.css";

import ColorList from "./ColorList";
import ColorInfo from "./ColorInfo";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <ColorInfo />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ColorList />
          </div>
        </div>
      </div>
    </div>
  );
}
