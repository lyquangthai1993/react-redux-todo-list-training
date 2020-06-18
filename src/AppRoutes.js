import React from "react";
import { Route } from "react-router";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Home from "./components/Home";

export const routeLinks = {
  home: {
    hideInNav: true,
    path: "/",
    name: "Todo app",
    component: Home,
  },
  todoList: {
    path: "/todo-list",
    name: "Todo list",
    component: TodoList,
  },
  addTodo: {
    path: "/add-todo",
    name: "Add todo",
    component: AddTodo,
  },
  
};
export default () => {
  return (
    <div className={"routes-wrapper"}>
      {Object.keys(routeLinks).map((key) => {
        const {path, component, exact} = routeLinks[key];
        return <Route key={key} exact={exact} path={path} component={component} />;
      })}
    </div>
  );
};
