import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import { Provider } from "react-redux";
//import store from "./redux/store";
import { Providers } from "./components/providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
