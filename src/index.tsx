//_index.js_

import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { WebglOne } from "./pages/webglTest/WebglOne";

const App = () => {

  return (
    <div>
      <h1>Hello!!</h1>
      <h2>WR</h2>
      <WebglOne/>
    </div>
  );
};
///
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
///
// ReactDOM.render(<App />, document.getElementById("root"));