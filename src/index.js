import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import store from "./store/store";
import { Provider } from "react-redux";
import "./styles/main.output.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
