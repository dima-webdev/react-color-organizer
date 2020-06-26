import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import App from "../components/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../redux/reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
