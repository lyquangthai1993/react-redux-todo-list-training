import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import store from "./redux/store";
import TodoApp from "./TodoApp";
import history from "./utils/history";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <TodoApp />
    </Router>
  </Provider>,
  rootElement
);
