import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Wonders from "./Wonders";

import "./styles.css";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Wonders />
  </Provider>,
  rootEl
);
