import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import Title from "./components/Title";
import "./styles.css";
import { appReducer } from "./reducers";
import Quote from "./components/Quote";

const logger = ({ getState }) => (next) => (action) => {
  console.log("Dispatching action: ", action);
  next(action);
};

let store = createStore(appReducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <Title />
      <Quote />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);